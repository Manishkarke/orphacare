import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Form.module.css";

function SignUp() {
  // For Storing User Data
  const [userData, setUserData] = useState({
    userName: "",
    userAddress: "",
    userEmail: "",
    phoneNumber: "",
    userPassword: "",
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

  // This function will be executed when the form is submitted.
  const formSubmitHandler = (event) => {
    event.preventDefault();
    ValidateForm(userData, confirmPassword, setErrors);
    console.log(userData);

    console.log(errors);
  };

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
    console.log(userData);

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

  return (
    <section className={classes["container"]}>
      <h2>Register</h2>
      <form onSubmit={formSubmitHandler}>
        <div
          className={`${classes["inputfield"]} ${
            errors.userName ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Username"
            value={userData.userName}
            onChange={nameInputChangeHandler}
          />

          {errors.userName && <span>{errors.userName}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.userAddress ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="useraddress"
            id="address"
            placeholder="Enter your Address"
            value={userData.userAddress}
            onChange={addressInputChangeHandler}
          />
          {errors.userAddress && <span>{errors.userAddress}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.userEmail ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="useremail">Email</label>
          <input
            type="text"
            name="userEmail"
            id="useremail"
            placeholder="Enter your email"
            value={userData.userEmail}
            onChange={emailInputChangeHandler}
          />
          {errors.userEmail && <span>{errors.userEmail}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="text"
            name="phonenumber"
            id="phonenumber"
            placeholder="Enter your phone number"
            value={userData.phoneNumber}
            onChange={phoneNumberInputChangeHandler}
          />
        </div>

        {/* Password Input Field Start */}
        <div
          className={`${classes["inputfield"]} ${
            errors.userPassword || errors.confirmPassword
              ? classes["input-error"]
              : ""
          }`}
        >
          <label htmlFor="password">Password</label>

          <div className={classes["inputfield__password"]}>
            <input
              type={show.showPassword ? "text" : "password"}
              name="UserPassword"
              id="password"
              placeholder="Enter your password"
              value={userData.userPassword}
              onChange={passwordInputChangeHandler}
            />

            <FontAwesomeIcon
              icon={show.showPassword ? faEyeSlash : faEye}
              id={classes["show-password"]}
              onClick={() =>
                setShow((prevShow) => {
                  return { ...prevShow, showPassword: !prevShow.showPassword };
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
          <label htmlFor="confirmPassword">Confirm password</label>
          <div className={classes["inputfield__password"]}>
            <input
              type={show.showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm your password"
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

        <button type="submit" className={classes["btn"]}>
          Sign Up
        </button>
      </form>
    </section>
  );
}

export default SignUp;

// Form Validation logics are here.
function ValidateForm(
  { userName, userPassword, userAddress, userEmail },
  confirmPassword,
  setErrors
) {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // Validate userName
  if (!userName.trim()) {
    // error.userName = "Username is required";
    setErrors((prevErrors) => {
      return { ...prevErrors, userName: "Username is required" };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, userEmail: "" };
    });
  }

  // Validate userEmail
  if (!userEmail.trim()) {
    // error.userEmail = "Email is required";
    setErrors((prevErrors) => {
      return { ...prevErrors, userEmail: "Email is required" };
    });
  } else if (!userEmail.match(emailRegex)) {
    // error.userEmail = "Email is not valid";
    setErrors((prevErrors) => {
      return { ...prevErrors, userEmail: "Email is not valid" };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, userEmail: "" };
    });
  }

  // Validate userPassword
  if (!userPassword.trim()) {
    // error.userPassword = "Password is required";
    setErrors((prevErrors) => {
      return { ...prevErrors, userPassword: "Password is required" };
    });
  } else if (userPassword.trim().length < 8) {
    // error.userPassword = "Password must be at least 8 character long";
    setErrors((prevErrors) => {
      return {
        ...prevErrors,
        userPassword: "Password must be at least 8 character long",
      };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, userPassword: "" };
    });
  }

  // Validate userAddress
  if (!userAddress.trim()) {
    // error.userPassword = "Address is required.";
    setErrors((prevErrors) => {
      return { ...prevErrors, userAddress: "Address is required" };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, userAddress: "" };
    });
  }

  // check if password and confirm password match.
  if (userPassword !== confirmPassword) {
    // error.confirmPassword = "Passwords must match";
    setErrors((prevErrors) => {
      return { ...prevErrors, confirmPassword: "Passwords must match" };
    });
  } else if (userPassword === confirmPassword) {
    setErrors((prevErrors) => {
      return { ...prevErrors, confirmPassword: "" };
    });
  }

  // setErrors(error);
}
