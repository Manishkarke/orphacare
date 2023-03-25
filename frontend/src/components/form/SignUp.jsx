import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Form.module.css";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

import { registrationValidator } from "../../utils/errorHandler";
import { signUpApiHandler } from "../../utils/axios";

function SignUp() {
  const navigate = useNavigate();

  // For Storing User Data
  const [userData, setUserData] = useState({
    userName: "",
    userAddress: "",
    userEmail: "",
    phoneNumber: "",
    userPassword: "",
    userType: "user",
  });

  // To Show and Hide password field
  const [show, setShow] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  // To confirm password
  const [confirmPassword, setConfirmPasword] = useState("");

  // For storing errors.
  const [errors, setErrors] = useState({});

  // Functions that will be called when the input field is changed.
  const nameInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, userName: event.target.value };
    });
  };

  const addressInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, userAddress: event.target.value };
    });
  };

  const emailInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, userEmail: event.target.value };
    });
  };

  const phoneNumberInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, phoneNumber: event.target.value };
    });
  };

  const passwordInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, userPassword: event.target.value };
    });
  };

  const confirmPasswordInputChangeHandler = (event) => {
    setConfirmPasword(event.target.value);
  };

  const joinAsInputChangeHandler = (event) => {
    setUserData((prevUserData) => {
      return { ...prevUserData, userType: event.target.value };
    });
  };

  // This function will be executed when the form is submitted.
  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // ValidateForm(userData, confirmPassword, setErrors);
    registrationValidator(userData, confirmPassword, setErrors);
    console.log(errors);

    // Form validation logics are here.
    let formIsValid = true;

    for (let err in errors) {
      if (errors[err]) {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      console.log("Form is valid.");

      const { userName, userAddress, userEmail, phoneNumber, userPassword, userType } = userData;
      // Sending Data to API
      try {
        const response = await signUpApiHandler(
          userName,
          userAddress,
          userEmail,
          phoneNumber,
          userPassword,
          userType
        );
        console.log(`The response is ${response}`);

        if (response.data.status === "error") {
          // Show error message
          console.log(`The error message is`);
          toast.error(response.data.message);
        } else {
          // Resetting the input fields
          setUserData({
            userName: "",
            userAddress: "",
            userEmail: "",
            phoneNumber: "",
            userPassword: "",
            userType: "user",
          });

          // Resetting the Show/hide password buttons
          setShow({
            showPassword: false,
            showConfirmPassword: false,
          });

          // Resetting the confirm password field
          setConfirmPasword("");

          // Redirect to home page
          navigate("/signin");
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with an error status code
          console.log(`The server responded with an error: ${error.response.data.message}`);
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response was received from the server.");
          toast.error("An error occurred while processing your request. Please try again later.");
        } else {
          // Something else happened in making the request that triggered an error
          console.log(`An error occurred: ${error.message}`);
          toast.error("An error occurred while processing your request. Please try again later.");
        }
      }

      console.log(formIsValid);
      // Resetting the input fields
      // setUserData({
      //   userName: "",
      //   userAddress: "",
      //   userEmail: "",
      //   phoneNumber: "",
      //   userPassword: "",
      // });

      // Resetting the Show/hide password buttons
      // setShow({
      //   showPassword: false,
      //   showConfirmPassword: false,
      // });

      // Resetting the confirm password field
      // setConfirmPasword("");
    }
  };

  return (
    <section className={classes["container"]}>
      <h2>Register</h2>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes["inputfield"]} ${errors.userName ? classes["input-error"] : ""}`}
        >
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Enter your Username'
            value={userData.userName}
            onChange={nameInputChangeHandler}
          />

          {errors.userName && <span>{errors.userName}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${errors.userAddress ? classes["input-error"] : ""}`}
        >
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='useraddress'
            id='address'
            placeholder='Enter your Address'
            value={userData.userAddress}
            onChange={addressInputChangeHandler}
          />
          {errors.userAddress && <span>{errors.userAddress}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${errors.userEmail ? classes["input-error"] : ""}`}
        >
          <label htmlFor='useremail'>Email</label>
          <input
            type='text'
            name='userEmail'
            id='useremail'
            placeholder='Enter your email'
            value={userData.userEmail}
            onChange={emailInputChangeHandler}
          />
          {errors.userEmail && <span>{errors.userEmail}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='phonenumber'>Phone number</label>
          <input
            type='text'
            name='phonenumber'
            id='phonenumber'
            placeholder='Enter your phone number'
            value={userData.phoneNumber}
            onChange={phoneNumberInputChangeHandler}
          />
        </div>

        {/* Password Input Field Start */}
        <div
          className={`${classes["inputfield"]} ${
            errors.userPassword || errors.confirmPassword ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor='password'>Password</label>

          <div className={classes["inputfield__password"]}>
            <input
              type={show.showPassword ? "text" : "password"}
              name='UserPassword'
              id='password'
              placeholder='Enter your password'
              value={userData.userPassword}
              onChange={passwordInputChangeHandler}
            />

            <FontAwesomeIcon
              icon={show.showPassword ? faEyeSlash : faEye}
              id={classes["show-password"]}
              onClick={() =>
                setShow((prevShow) => {
                  return {
                    ...prevShow,
                    showPassword: !prevShow.showPassword,
                  };
                })
              }
            />
          </div>
          {errors.userPassword && <span>{errors.userPassword}</span>}
        </div>

        {/* Confirm Password field here */}
        <div
          className={`${classes["inputfield"]} ${
            errors.confirmPassword ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor='confirmPassword'>Confirm password</label>
          <div className={classes["inputfield__password"]}>
            <input
              type={show.showConfirmPassword ? "text" : "password"}
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={confirmPasswordInputChangeHandler}
            />
            <FontAwesomeIcon
              icon={show.showConfirmPassword ? faEyeSlash : faEye}
              id={classes["show-password"]}
              onClick={() => {
                setShow((prevShow) => {
                  return {
                    ...prevShow,
                    showConfirmPassword: !prevShow.showConfirmPassword,
                  };
                });
              }}
            />
          </div>
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>

        {/* Password Input Field End */}

        <div className={classes["inputfield"]}>
          <label htmlFor='userType'>Join As</label>
          <select
            name='userType'
            id='userType'
            value={userData.userType}
            onChange={joinAsInputChangeHandler}
          >
            <option value='user'>User</option>
            <option value='volunteer'>Volunteer</option>
          </select>
        </div>

        <button type='submit' className={classes["btn"]}>
          Sign Up
        </button>

        <div className={classes["footer_link"]}>
          <span>Already have an account?</span>
          <Link to='/signin'>Sign In</Link>
        </div>

        <ToastContainer />
      </form>
    </section>
  );
}

export default SignUp;
