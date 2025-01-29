"use client"
import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col, Card, Alert, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { useRouter } from 'next/navigation';

import {
  fetchCart,
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
} from "../features/CartData/CartSlicer";
import { createUserDetail } from "../features/Applycourse/Applied";
import { FaRegTrashAlt } from "react-icons/fa";


import { fetchPayment } from "../features/paymentDetails/Paymnetslicer";
import { StorageLink } from "../components/apiLink";
import { format, parse } from "date-fns";

function Cardpage() {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.items);
  const cartStatus = useSelector((state) => state.cart.status);
  const cartError = useSelector((state) => state.cart.error);
  const [userCountry, setUserCountry] = useState(null);
  const [priceByCountry, setPriceByCountry] = useState(null);


 
  const [studentId, setStudentId] = useState(null);

  useEffect(() => {

    const storedStudentId = localStorage?.getItem("student_id");
    setStudentId(storedStudentId);
  }, []); 
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const [personType, setPersonType] = useState("me");
  const { loading, error } = useSelector((state) => state.userDetails);

  const payment = useSelector((state) => state.payment);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    utrNumber: "",
    image: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // console.log("meededewfd", studentId);
    if (studentId) {
      dispatch(fetchCart(studentId));
    }
  }, [dispatch, studentId]);

  // console.log("meededewfd", studentId);

  useEffect(() => {
    dispatch(fetchPayment());


  }, [dispatch]);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setData(cartItems[0]);
    }
  }, [cartItems]);

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangee = (phone) => {
    setFormData({
      ...formData,
      phoneNumber: phone, // Updating phoneNumber field correctly
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data) {
      return;
    }

    const submissionData = new FormData();
    submissionData.append(
      "first_name",
      formData.firstName || data?.student?.name
    );
    submissionData.append(
      "last_name",
      formData.lastName || data?.student?.last_name
    );
    submissionData.append(
      "phone_number",
      formData.phoneNumber || data?.student?.phone_number
    );
    submissionData.append("email", formData.email || data?.student?.email);
    submissionData.append("utr_number", formData.utrNumber);
    submissionData.append("image", formData.image);
    submissionData.append("person_type", personType);
    submissionData.append("user_id", data.student_id);
    submissionData.append("course_id", data?.course_id);
    submissionData.append("training_id", data?.training_cal_id);

    // console.log("MEEE", formData.email);

    dispatch(createUserDetail(submissionData))
      .then((response) => {
        // Show success message after successful submission
        Swal.fire(
          "Success",
          "User details submitted successfully",
          "success"
        ).then(() => {
          router.push("/");
        });

        // console.log(response);
      })
      .catch((error) => {
        // Show error message in case of failure
        Swal.fire("Error", "Submission failed", "error");
      });
  };

  const [promoCode, setPromoCode] = useState("");
  const [selectedCode, setSelectedCode] = useState("");
  const promoCodes = [
    { code: "SCRUM10", discount: "5%", validTill: "30 Sep, 2024" },
    { code: "SPRING5", discount: "5%", validTill: "31 Dec, 2024" },
  ];

  useEffect(() => {
   
    const fetchUserCountry = async () => {
      try {
        const ipResponse = await fetch("https://ipinfo.io/json");
        const ipData = await ipResponse.json();
        const countryCode = ipData.country.toLowerCase(); // get user's country code
   
        const countryResponse = await fetch(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );

        const countryData = await countryResponse.json();
        const userCurrency = countryData.currencies[0].code.toLowerCase();
        // console.log(userCurrency, "dfvdfvdf");
        setUserCountry(userCurrency); // set user currenc

        const filteredCurrency = data?.course?.multi_country_currency?.find(
          (item) => item.country_id === userCurrency
        );

        // console.log("Filtered Currency Data:", filteredCurrency.price);
      } catch (error) {
        console.error("Error fetching currency information:", error);
      }
    };

    fetchUserCountry();
  }, []);

  // console.log(data?.course?.multi_country_currency);

  useEffect(() => {
    if (data?.course?.multi_country_currency && userCountry) {
      const foundPrice =
        data?.course?.multi_country_currency?.find(
          (currency) =>
            currency?.country_id?.toLowerCase() === userCountry?.toLowerCase()
        ) ||
        data?.course?.multi_country_currency?.find(
          (currency) => currency?.country_id?.toLowerCase() === "usd"
        );


      if (foundPrice) {
        setPriceByCountry(foundPrice);
      }
    }
  }, [data, userCountry]);

  // console.log("hhhhh", priceByCountry);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "inr",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(priceByCountry?.price);

  // const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();

  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const deletecartItem = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from your cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart(studentId));

        Swal.fire({
          title: "Removed!",
          text: "Item has been removed from your cart.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        router.push("/");
      }
    });
  };

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const ipResponse = await fetch("https://ipinfo.io/json");
        const ipData = await ipResponse.json();
        const countryCode = ipData.country.toLowerCase();

        const countryResponse = await fetch(
          `https://restcountries.com/v2/alpha/${countryCode}`
        );
        const countryData = await countryResponse.json();
        // console.log(countryData.currencies[0].code);
        setUserCountry(countryData.currencies[0].code);
      } catch (error) {
        console.error("Error fetching currency information:", error);
      }
    };

    fetchUserCountry();
  }, []);

  const calculateDiscountedPrice = (originalPrice, discountPercentage) => {
   
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
  };

  const calculateDiscountedNotPrice = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    return originalPrice - discountAmount;
  };

  const discountedPrice = calculateDiscountedPrice(
    priceByCountry?.price,
    priceByCountry?.discount_percentage
  );

  // console.log('course prieew',discountedPrice)

  // const discountedNotPrice =
  //   calculateDiscountedNotPrice(
  //     countryPrice?.price,
  //     data.discount_percentage
  //   );

  // const monthlyPayment =
  //   calculateMonthlyPayment(discountedNotPrice);

  // const formattedPrice = new Intl.NumberFormat("en-US", {
  //   style: "currency",
  //   currency: userCountry.toLowerCase() || "inr",
  //   minimumFractionDigits: 0,
  //   maximumFractionDigits: 0,
  // }).format(discountedPrice);

  // console.log('cwcwerfrw', formattedPrice)

  // console.log(data?.training_calendar?.start_date);
  // console.log(data?.training_calendar?.start_time);

  // const startDate = new Date(data?.training_calendar?.start_date);

  // const formattedStartDate = format(startDate, "MMM dd, yyyy");

  // console.log('wrfcrwfrefrfe',formattedStartDate)

  const currencyCode =
    data?.course?.multi_country_currency?.find(
      (currency) =>
        currency?.country_id?.toLowerCase() === userCountry?.toLowerCase()
    )?.country_id || "USD";

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currencyCode,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  // console.log(userCountry.toLowerCase())

  const startDate = data?.training_calendar?.start_date
    ? new Date(data.training_calendar.start_date)
    : null;
  const startTime = data?.training_calendar?.start_time;

  // Handle date formatting safely
  const formattedDate = startDate
    ? format(startDate, "MMMM dd, yyyy")
    : "Invalid Date";

  // Handle time formatting safely
  const formattedTime = startTime
    ? new Date(`1970-01-01T${startTime}`).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    : "Invalid Time";


    console.log('wrfrf243r234',payment)

    

  return (<> 
  <head>
    <title>Cart - Ingenious Learn</title>
    <meta name="description" content="Review your cart and proceed to checkout to purchase educational courses from Ingenious Learn." />
    <meta name="robots" content="index, follow" />
    <meta property="og:title" content="Cart - Ingenious Learn" />
    <meta property="og:description" content="Your cart contains courses you have selected. Proceed to checkout to complete your purchase." />
    <meta property="og:image" content="/images/cart-banner.jpg" />
    <meta property="og:url" content="https://www.ingeniouslearn.com/cart" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Cart - Ingenious Learn" />
    <meta name="twitter:description" content="Check your cart and get ready to complete your purchase for educational courses at Ingenious Learn." />
    <meta name="twitter:image" content="/images/cart-banner.jpg" />
  </head>
    <div className="container mt-5">
      <Row>
        <Col md={8} className="mb-4">
          <Card className="p-4 border-primary-shadow rounded">
            <div className="d-flex align-items-center mb-3">
              <div className="step-circle d-flex align-items-center justify-content-center">
                <span>1</span>
              </div>
              <h4 className="text-primary mx-3">Basic Details</h4>
            </div>

            {cartStatus === "loading" ? (
              <div className="text-center">
                <Spinner animation="border" variant="primary" />
              </div>
            ) : cartError ? (
              <Alert variant="danger">{cartError}</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="personType" className="mb-3 d-flex">
                  <Form.Check
                    type="radio"
                    label="Me"
                    name="personType"
                    id="me"
                    className="me-3"
                    checked={personType === "me"}
                    onChange={() => setPersonType("me")}
                  />
                  <Form.Check
                    type="radio"
                    label="Someone Else"
                    name="personType"
                    id="someoneElse"
                    checked={personType === "someoneElse"}
                    onChange={() => setPersonType("someoneElse")}
                  />
                </Form.Group>

                {personType === "someoneElse" && (
                  <Alert variant="info" className="mb-3">
                    Please enter your details below. You can provide details of
                    attendee(s) once the payment is complete.
                  </Alert>
                )}

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="firstName" className="mb-3">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        className="py-2"
                        name="firstName"
                        value={
                          formData.firstName !== undefined
                            ? formData.firstName
                            : data?.student?.name
                        }
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="lastName" className="mb-3">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        className="py-2"
                        name="lastName"
                        value={
                          formData.lastName !== undefined
                            ? formData.lastName
                            : data?.student?.last_name
                        }
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="phoneNumber" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>

                      <PhoneInput
                        country={"in"}
                        value={
                          formData.phoneNumber !== undefined
                            ? formData.phoneNumber
                            : data?.student?.phoneNumber || ""
                        }
                        onChange={(phone) => handleChangee(phone)}
                        inputProps={{
                          name: "phoneNumber",
                          required: true,
                          className: "form-control padding-left-10",
                          placeholder: "Enter your phone number",
                          style: { height: "41px" },
                        }}
                        enableSearch={true}
                        inputClass="w-100 border-dark"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        className="py-2"
                        value={
                          formData.email !== undefined
                            ? formData.email
                            : data?.student?.email
                        }
                        required
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group controlId="utrNumber" className="mb-3">
                      <Form.Label>Transaction ID (UTR)</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Transaction ID (UTR)"
                        className="py-2"
                        name="utrNumber"
                        value={formData.utrNumber}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group controlId="imageUpload" className="mb-3">
                      <Form.Label>Payment Screenshot</Form.Label>
                      <Form.Control
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                        style={{ height: "41px" }} // Adjust the height as per your requirement
                      />

                      <Form.Text className="text-muted">
                        Please attach a screenshot as proof after the payment is
                        done.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group
                  controlId="terms"
                  className="d-flex justify-content-between align-items-center"
                >
                  <Form.Check
                    type="checkbox"
                    label="I agree to the terms & conditions"
                  />
                  <Button
                    variant="primary"
                    type="submit"
                    className="ms-3 w-max "
                  >
                    Proceed to Payment
                  </Button>
                </Form.Group>
              </Form>
            )}
          </Card>
        </Col>

        <Col md={4}>
          <Card className="p-4 mb-4 border-primary-shadow rounded">
            <div className="d-flex align-content-center mb-3">
              <div className="step-circle d-flex align-items-center justify-content-center">
                <span>2</span>
              </div>
              <h4 className="text-primary mx-3">Order Summary</h4>
            </div>

            {data?.course ? (
              <div className="order-summary position-relative  ">
                <div className="border border-2 p-3 rounded shadow-sm">
                  <div>
                    <p className="mb-2">
                      <strong>{data.course.name}</strong>
                    </p>
                    <p className="text-muted mb-0">
                      <i className="bi bi-calendar me-2"></i>
                      {formattedDate}
                    </p>
                    <p className="text-muted mb-0">
                      <i className="bi bi-clock me-2"></i>
                      {formattedTime}
                    </p>

                    <button
                      className="btn position-absolute btn-danger btn-sm rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        width: "35px",
                        height: "35px",
                        top: "12px",
                        right: "14px",
                      }}
                      onClick={() => deletecartItem()}
                    >
                    <FaRegTrashAlt/>
    
                    </button>
                  </div>
                </div>

                <p className="mt-4">
                  {/* <strong>Total:</strong>  {formatCurrency(discountedPrice)} */}
                  {discountedPrice <= 0 ? (
                    <strong>Free</strong>
                  ) : (
                    <>
                      <strong>Total:</strong> {formatCurrency(discountedPrice)}
                    </>
                  )}
                </p>

                <div className="mt-4">
                  <div className="mt-4">
                    <strong>UPI ID:</strong>
                    <p>{payment?.data[0]?.upi_id}</p>
                  </div>

                  <strong>Scan QR for Payment:</strong>
                  <div className="text-center ">
                    <img
                      src={`${StorageLink}/${payment?.data[0]?.qr_img}`}
                      alt="QR Code for Payment"
                      className="w-50 my-3"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <p>No items in the cart.</p>
            )}
          </Card>

          {/* <div className="container p-3 mt-4 bg-white border-primary-shadow rounded">
      <div className="d-flex align-items-center mb-3">
        <i className="bi bi-percent text-primary fs-4 me-2"></i>
        <h5 className="m-0 fw-bold">Promo Codes</h5>
      </div>

      
      <form onSubmit={handleSubmit} className="mb-3 position-relative">
        <div className="form-group d-flex align-items-center">
          <input
            type="text"
            name="promoCode"
            className="form-control"
            placeholder="Apply a Code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button type="submit" className="btn btn-primary ms-2">
            Apply
          </button>
        </div>
      </form>


      <div className="row g-3 overflow-auto" style={{ maxHeight: '200px' }}>
        {promoCodes.map((promo) => (
          <div
            key={promo.code}
            className={`col-12 border p-2 rounded d-flex align-items-start cursor-pointer ${
              selectedCode === promo.code ? 'border-primary' : 'border-secondary'
            }`}
            onClick={() => setSelectedCode(promo.code)}
          >
            <input
              type="radio"
              name="promo"
              value={promo.code}
              checked={selectedCode === promo.code}
              className="me-2"
              onChange={() => setSelectedCode(promo.code)}
            />
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between">
                <span className="fw-bold">{promo.code}</span>
                <span className="text-primary">{promo.discount} Discount</span>
              </div>
              <small className="text-muted">Valid till {promo.validTill}</small>
            </div>
          </div>
        ))}
      </div>
    </div> */}
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Cardpage;
