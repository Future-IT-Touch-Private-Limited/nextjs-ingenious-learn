import React,{useState} from "react";
// import { BaseLink } from "../config/ApiLink";
import { BaseLink } from "../config/ApiLink";

import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'


export default function Formlogin({toggleModal}) {
  const [openDropdown, setOpenDropdown] = useState("");
  const [openNav, setOpenNav] = useState(false);
  const [activeTabNav, setActiveTabNav] = useState("login");
  const { userById, status, error } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const switchTab = (tab) => {
    setActiveTabNav(tab);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (activeTabNav === "signup") {
        const response = await axios.post(
          `${BaseLink}/register`,
          { name, email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);

        console.log(response)

        Swal.fire({
          title: "Success!",
          text: "Registration successful.",
          icon: "success",
          confirmButtonText: "OK",
        });

        setIsModalOpen(false);
        setName("");
        setEmail("");
        setPassword("");
      } else {
        const response = await axios.post(
          `${BaseLink}/login`,
          { email, password },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        const token = response.data.student_id;
        localStorage.setItem("student_id", token);
        setStuId(token);
        Swal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "OK",
        });

        setEmail("");
        setPassword("");
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error in handleSubmit:", error.response);

      Swal.fire({
        title: "Error!",
        text:
          error.response?.data?.errors?.password ||
          "An unexpected error occurred.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
     

      <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Welcome</h5>
                <button onClick={toggleModal} className="btn-close"></button>
              </div>

              <div className="modal-body">
                <div className="nav justify-content-center sign-nav nav-tabs mb-4">
                  <button
                    onClick={() => switchTab("login")}
                    className={`nav-link ${activeTabNav === "login" ? "active" : ""
                      }`}
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => switchTab("signup")}
                    className={`nav-link ${activeTabNav === "signup" ? "active" : ""
                      }`}
                  >Sign Up
                  </button>
                </div>

                <div>
                  {/* {/ <h2 className="h5 mb-4">{activeTabNav === 'login' ? 'Login' : 'Signup'}</h2> /} */}
                  <form onSubmit={handleSubmit}>
                    {activeTabNav === "signup" && (
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control contact-form"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    )}
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control contact-form"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        className="form-control contact-form"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>

                    <button className="btn-submit w-100 mb-3">
                      {activeTabNav === "login" ? "Login" : "Signup"}
                    </button>
                  </form>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}
