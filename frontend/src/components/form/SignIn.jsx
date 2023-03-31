import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { signInApiHandler } from "../../utils/axios";
import { addAccessTokenToLocalStorage } from "../../utils/localStorage";
import { signInFormValidator } from "../../utils/errorHandler";

const SignIn = () => {
  const navigate = useNavigate();
  // Reference for User Inputs
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const rememberUserRef = useRef();
  const [showPassword, setShowPassword] = useState(false); // To change password's input type
  const [errors, setErrors] = useState({}); // To Store errors

  const formSubmitHandler = async (event) => {
    event.preventDefault();

    // Storing all input data in one object
    const formData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
      rememberme: rememberUserRef.current.checked,
    };

    // Form Data Validation Starts here
    const { userEmail, userPassword } = formData;
    let formIsvaild = true;
    signInFormValidator(formData, setErrors);

    for (const error in errors) {
      if (errors[error]) {
        formIsvaild = false;
        break;
      }
    }
    // Check if form is valid and if it is valid then reset the form data
    if (formIsvaild) {
      // FORM SUBMITTING LOGIC ARE HERE
      try {
        const response = await signInApiHandler(userEmail, userPassword);

        addAccessTokenToLocalStorage(response.data.data.accessToken, response.data.data.name);

        console.log(`The access token is: ${response.data.data.accessToken}`);

        console.log(response);

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
          navigate("/");
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

      console.log("This form is valid");
    }
  };

  return (
    <section className={classes.container}>
      <h2>Sign In</h2>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes["inputfield"]} ${errors.emailError ? classes["input-error"] : ""}`}
        >
          <label htmlFor='username'>Email</label>
          <input type='text' placeholder='Enter your email' id='username' ref={userEmailRef} />
          {errors.emailError && <span>{errors.emailError}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.passwordError ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor='password'>Password</label>
          <div className={classes["inputfield__password"]}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Enter your password'
              id='password'
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
            <input type='checkbox' name='rememberme' id='rememberme' ref={rememberUserRef} />
            <label htmlFor='rememberme'>Remember Me</label>
          </div>

          <a href='#h'>Forget Password?</a>
        </div>

        <button type='submit' className={classes["btn"]}>
          Sign In
        </button>
      </form>
      <ToastContainer />

      <div className={classes["footer_link"]}>
        <span>Don't have an account?</span>
        <Link to='/signup'>Sign up</Link>
      </div>
    </section>
  );
};

export default SignIn;
