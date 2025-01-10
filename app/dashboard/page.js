"use client";

import React, { useState, useEffect } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, Tab, Nav, Modal, Form, Row, Col } from "react-bootstrap";
// const apiKey = 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==';
import Select from "react-select";
import { BaseLink } from "../config/ApiLink";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountries,
  fetchStates,
  fetchCities,
} from "../features/locationData/locationSlicer";
import { getUserById } from "../features/user/authSlice";

const PopupForm = ({ show, handleClose, onSubmit, userById }) => {
  const dispatch = useDispatch();
  const [lastName, setLastname] = useState(userById?.last_name || "");
  const [date_of_birth, setDob] = useState(userById?.date_of_birth || "");
  const [phoneNumber, setphoneNumber] = useState(userById?.phone_number || "");
  const [address, setAddress] = useState(userById?.address || "");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);

  const { countries, states, cities, loading, error } = useSelector(
    (state) => state.location
  );

  useEffect(() => {
    if (show) {
      dispatch(fetchCountries());
    }
  }, [dispatch, show]);

  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchStates(selectedCountry.value));
    }
  }, [dispatch, selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      dispatch(
        fetchCities({
          countryCode: selectedCountry?.value,
          stateCode: selectedState?.value,
        })
      );
    }
  }, [dispatch, selectedState, selectedCountry]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      lastName,
      date_of_birth,
      phoneNumber,
      address,
      selectedCountry,
      selectedState,
      selectedCity,
      profileImage,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);

      const reader = new FileReader();
      reader.onload = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Complete Your Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
          <div className="text-center mb-4">
            <div className="mb-3">
              {profileImagePreview ? (
                <img
                  src={profileImagePreview}
                  alt="Profile"
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
              ) : (
                <div
                  className="rounded-circle bg-light d-flex justify-content-center align-items-center"
                  style={{
                    width: "120px",
                    height: "120px",
                    lineHeight: "120px",
                    textAlign: "center",
                    fontSize: "16px",
                    color: "#6c757d",
                  }}
                >
                  Upload Image
                </div>
              )}
            </div>
            <Form.Control
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  value={userById?.name}
                  disabled="true"
                  placeholder="Enter your first name"
                  required
                  readonly
                  aria-label="Disabled input example"
                  className="border-dark disabled"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  value={lastName || userById?.last_name}
                  onChange={(e) => setLastname(e.target.value)}
                  placeholder="Enter your last name"
                  required
                  className="border-dark"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            <Col md={6}>
              <Form.Group controlId="formDob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={date_of_birth || userById?.date_of_birth}
                  onChange={(e) => setDob(e.target.value)}
                  required
                  className="border-dark"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPhone">
                <Form.Label className="fw-bold mb-2">Phone Number</Form.Label>

                <PhoneInput
                  country={"in"}
                  value={phoneNumber || userById?.phone_number}
                  onChange={(value) => setphoneNumber(value)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    className: "form-control", // Keep this for the actual input field
                    placeholder: "Enter your phone number",
                  }}
                  enableSearch={true}
                  inputClass="w-100 border-dark" // Apply custom styles for the input field
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className=" mt-2">
            <Col md={6}>
              <Form.Group controlId="formAddress" className="mt-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address || userById?.address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  required
                  className="border-dark"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="formCountry">
                <Form.Label>Gender</Form.Label>
                <Select
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                  ]}
                  value={selectedGender || userById?.gender}
                  onChange={(selectedOption) =>
                    setSelectedGender(selectedOption)
                  }
                  placeholder="Select Gender"
                  isSearchable={false}
                  isDisabled={loading}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      backgroundColor: "white",
                    }),
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            <Col md={6}>
              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>

                <Select
                  options={countries.map((country) => ({
                    value: country.iso2,
                    label: country.name,
                  }))}
                  value={selectedCountry || userById?.country}
                  required="true"
                  onChange={(selectedOption) => {
                    setSelectedCountry(selectedOption);
                    setSelectedState(null);
                    setSelectedCity(null);
                  }}
                  placeholder="Select Country"
                  isSearchable
                  isDisabled={loading}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      backgroundColor: "white",
                    }),
                  }}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formState">
                <Form.Label>State</Form.Label>
                <Select
                  options={states.map((state) => ({
                    value: state.iso2,
                    label: state.name,
                  }))}
                  value={selectedState || userById?.state}
                  onChange={setSelectedState}
                  placeholder="Select State"
                  required="true"
                  isSearchable
                  isDisabled={!selectedCountry || loading}
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: "black",
                      backgroundColor: "white",
                    }),
                  }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="g-4 mt-2">
            <Col md={12}>
              {cities.length > 0 ? (
                <Form.Group controlId="formCity">
                  <Form.Label>City</Form.Label>
                  <Select
                    options={cities.map((city) => ({
                      value: city.name,
                      label: city.name,
                    }))}
                    value={selectedCity || userById?.city}
                    onChange={setSelectedCity}
                    placeholder="Select City"
                    isSearchable
                    isDisabled={!selectedState || loading}
                    styles={{
                      control: (base) => ({
                        ...base,
                        borderColor: "black",
                        backgroundColor: "white",
                      }),
                    }}
                  />
                </Form.Group>
              ) : (
                ""
              )}
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-4">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default function Myacc() {
  const dispatch = useDispatch();
  const { userById, status } = useSelector((state) => state.auth);
  const [stuID, setStuId] = useState();
  const [activeKey, setActiveKey] = useState("my-profile");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleShow = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const stuId = localStorage.getItem("student_id");
    setStuId(stuId);

    if (!stuId) {
      window.location = "/";
    }
  }, []);

  useEffect(() => {
    if (stuID) {
      dispatch(getUserById(stuID));
    }
  }, [stuID, dispatch]);

  const fieldsToCheck = [
    "last_name",
    "address",
    "city",
    "country",
    "state",
    "gender",
  ];

  const totalFields = fieldsToCheck.length;
  let filledFields;
  let profileCompletion;
  let profileCompletion2 = 80;

  if (userById) {
    filledFields = fieldsToCheck.filter((field) => userById[field]);

    profileCompletion = Math.round((filledFields.length / totalFields) * 120);
  }

  const handleFormSubmit = async (formData) => {
    const {
      firstName,
      lastName,
      date_of_birth,
      phoneNumber,
      address,
      selectedCountry,
      selectedState,
      selectedCity,
      profileImage,
    } = formData;


    const data = new FormData();

    data.append("last_name", lastName);
    data.append("profile_picture", profileImage);
    data.append("date_of_birth", date_of_birth);
    data.append("phone_number", phoneNumber);
    data.append("address", address);
    data.append("country", selectedCountry?.value);
    data.append("state", selectedState?.value);
    data.append("city", selectedCity?.value);

    try {
      // Make the POST request using Axios
      const response = await axios.post(
        `${BaseLink}/newregister/${stuID}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      handleClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (profileCompletion / 100) * circumference;

  if (!userById) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row p-3">
          <div
            className="col-md-12 d-flex flex-column flex-md-row items-center mb-2 p-4"
            style={{
              width: "100%",
              borderRadius: "20px",
              backgroundImage: `url("/images/bgshades.svg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="position-relative p-3 text-center">
              {/* SVG background circle */}
              <svg
                className="position-absolute top-50 start-50 translate-middle"
                width="180"
                height="150"
                viewBox="0 0 150 150"
              >
                <circle
                  className="text-white"
                  strokeWidth="10"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="75"
                  cy="75"
                />
                <circle
                  className="text-success"
                  strokeWidth="10"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="75"
                  cy="75"
                  style={{ transition: "stroke-dashoffset 0.35s" }}
                />
              </svg>

              <img
                src="/images/profile-user.png"
                alt="User Image"
                className="rounded-circle position-relative"
                width="130"
                height="130"
                style={{ zIndex: 1 }}
              />

              <div
                className="position-absolute bottom-10 start-30 translate-middle-x translate-middle-y bg-success text-white border-10 border-white rounded-pill px-2 py-1"
                style={{ zIndex: 111, left: "33%" }}
              >
                {profileCompletion}%
              </div>
            </div>

            <div className="d-flex p-2 flex-column justify-content-center align-items-center text-center text-md-left">
              <h2>{userById?.name}</h2>
              <p>{userById?.email}</p>
            </div>
          </div>

          <div className="bg-light py-5 my-5 col-md-12">
            {profileCompletion <= 90 ? (
              <div className="d-flex flex-column justify-content-center align-items-center p-3">
                <img
                  src="/images/planers.png"
                  alt="User Image"
                  className="mb-3"
                  width="140"
                />

                <div className="text-center px-3">
                  <h3>Your Profile is Empty</h3>
                  <p>
                    Complete your profile now and unlock personalized career
                    opportunities and guidance tailored just for you!
                  </p>

                  {/* Link the button to openModal */}
                  <Button variant="primary" className="mt-4" onClick={handleShow}>
                    Complete Profile
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex flex-column flex-md-row align-items-start p-4 bg-light rounded shadow-lg">
                  <Tab.Container
                    activeKey={activeKey}
                    onSelect={(key) => setActiveKey(key)}
                  >
                    <Nav
                      variant="pills"
                      className="flex-md-column flex-row nav-pills-custom me-md-4 mb-3 mb-md-0"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="my-profile" className="py-2 px-4">
                          My Profile
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="my-course" className="py-2 px-4">
                          My Course
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="help-center" className="py-2 px-4">
                          Help Center
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="logout" className="py-2 px-4">
                          Logout
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content className="tab-content-custom p-4 flex-grow-1">
                      <Tab.Pane eventKey="my-profile">
                        <h4 className="mb-3">User Information</h4>
                        <p>Name: John Doe</p>
                        <p>Last Name: Doe</p>
                        <p>Email: john.doe@example.com</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="my-course">
                        <h4 className="mb-3">My Courses</h4>
                        <p>Course 1: Introduction to React</p>
                        <p>Course 2: Advanced JavaScript</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="help-center">
                        <h4 className="mb-3">Help Center</h4>
                        <p>For support, contact us at support@example.com</p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="logout">
                        <h4 className="mb-3">Logout</h4>
                        <p>Click the button below to logout:</p>
                        <Button variant="danger">Logout</Button>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <PopupForm
        show={isModalOpen}
        userById={userById}
        handleClose={handleClose}
        onSubmit={handleFormSubmit}
      />
    </>
  );
}
