import React from "react";
import './ForgotPassword.css';
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
      <div className="fade-in">
      <div className="centered-box">
        <div className="box">
          <div className="new">
            <ErrorOutlineIcon fontSize="large" style={{ color: "blue" }} />
            <b style={{ color: "dark" }}>Forgot Password</b>
            <h6 className="fw-light fw-lighter" style={{ color: "#dark" }}>
              Enter your email and we'll send you a OTP to <br />
              reset your password
            </h6>
            <input type="text" placeholder="Email" />
            <button className="otp">Send OTP</button>
            <div className="back">
              <Link to="/login">Back to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
