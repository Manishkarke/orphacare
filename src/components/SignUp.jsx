import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import classes from "./Form.module.css";

function SignUp() {
  const [userData, setUserData] = useState({
    userName: "",
    userAddress: "",
    userEmail: "",
    phoneNumber: "",
    userPassword: "",
  });
  const [show, setShow] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });
  const [confirmPassword, setConfirmPasword] = useState("");

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
    console.log(userData);
  };

  return (
    <section className={classes["container"]}>
      <h2>Register</h2>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["inputfield"]}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your Username"
            value={userData.userName}
            onChange={nameInputChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="useraddress"
            id="address"
            placeholder="Enter your Address"
            value={userData.userAddress}
            onChange={addressInputChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="useremail">Email</label>
          <input
            type="text"
            name="userEmail"
            id="useremail"
            placeholder="Enter your email"
            value={userData.userEmail}
            onChange={emailInputChangeHandler}
          />
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
        <div className={classes["inputfield"]}>
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

          <div className={classes["inputfield"]}>
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
          </div>

          {/* Password Input Field End */}

          <button type="submit" className={classes["btn"]}>
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignUp;
