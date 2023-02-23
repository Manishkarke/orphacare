import React, { useRef, useState } from "react";
import axios from "axios";
import classes from "./Form.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ApiConstants } from "../../constants/constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  // Reference for User Inputs
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const rememberUserRef = useRef();
  const [showPassword, setShowPassword] = useState(false); // To change password's input type
  const [errors, setErrors] = useState({}); // To Store errors

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    const apiUrl = ApiConstants.signIn;

    // Storing all input data in one object
    const formData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
      rememberme: rememberUserRef.current.checked,
    };

    // Form Data Validation Starts here
    let newError = {};
    let formIsvaild = true;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Validate Email
    if (formData.userEmail.trim() === "") {
      newError.emailError = "Email is Required.";
    } else if (!formData.userEmail.match(emailRegex)) {
      newError.emailError = "Email is not vaild.";
    }

    // Validate password
    if (formData.userPassword.trim() === "") {
      newError.passwordError = "Password is required.";
    }

    setErrors(newError);
    const { userEmail, userPassword } = formData;

    for (const error in newError) {
      if (newError[error]) {
        formIsvaild = false;
        break;
      }
    }
    // Check if form is valid and if it is valid then reset the form data
    if (formIsvaild) {
      // FORM SUBMITTING LOGIC ARE HERE
      try {
        const response = await axios.post(apiUrl, {
          emailAddress: userEmail,
          password: userPassword,
        });
        localStorage.setItem("access_token", response.data.access_token);
        console.log(`The response is ${response}`);

        if (response.data.status === "error") {
          // Show error message
          console.log(`The error message is`);
          toast.error(response.data.message);
        } else {
          // Resetting the Input Value to initial value
          userEmailRef.current.value = "";
          passwordRef.current.value = "";
          rememberUserRef.current.checked = false;
          setShowPassword(false);

          // Redirect to home page
          window.location.href = "/home";
        }
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with an error status code
          console.log(
            `The server responded with an error: ${error.response.data.message}`
          );
          toast.error(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          console.log("No response was received from the server.");
          toast.error(
            "An error occurred while processing your request. Please try again later."
          );
        } else {
          // Something else happened in making the request that triggered an error
          console.log(`An error occurred: ${error.message}`);
          toast.error(
            "An error occurred while processing your request. Please try again later."
          );
        }
      }

      console.log("This form is valid");
    }
  };

  return (
    <section className={classes.container}>
      <h2>Sign In</h2>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes["inputfield"]} ${
            errors.emailError ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="username"
            ref={userEmailRef}
          />
          {errors.emailError && <span>{errors.emailError}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.passwordError ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <div className={classes["inputfield__password"]}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              id="password"
              ref={passwordRef}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              id={classes["show-password"]}
              onClick={() => {
                setShowPassword(!showPassword);
              }}
            />
          </div>
          {errors.passwordError && <span>{errors.passwordError}</span>}
        </div>

        {/* Section For forget password and remember user */}
        <div className={classes["helper-section"]}>
          <div className={classes["helper-section__inner"]}>
            <input
              type="checkbox"
              name="rememberme"
              id="rememberme"
              ref={rememberUserRef}
            />
            <label htmlFor="rememberme">Remember Me</label>
          </div>

          <a href="#h">Forget Password?</a>
        </div>

        <button type="submit" className={classes["btn"]}>
          Sign In
        </button>
      </form>
      <ToastContainer />

      <div className={classes["footer_link"]}>
        <span>Don't have an account?</span>
        <Link to="/signup">Sign up</Link>
      </div>
    </section>
  );
};

export default SignIn;