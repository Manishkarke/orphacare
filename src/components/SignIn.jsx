import React, { useRef, useState } from "react";
import classes from "./Form.module.css";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignIn = () => {
  const userEmailRef = useRef();
  const passwordRef = useRef();
  const rememberUserRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ emailError: "", passwordError: "" });

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {
      userEmail: userEmailRef.current.value,
      userPassword: passwordRef.current.value,
      rememberme: rememberUserRef.current.checked,
    };

    console.log(formData);

    // VALIDATE FORM
    function validateForm({ userEmail, userPassword }) {
      const emailRegex = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

      if (userEmail.trim() === "") {
        setErrors((prevState) => {
          return (prevState.emailError = "Email cannot be empty.");
        });
      } else if (userEmail !== emailRegex) {
        setErrors((prevState) => {
          return (prevState.emailError = "This is not valid email.");
        });
      }
    }

    validateForm(formData);

    userEmailRef.current.value = "";
    passwordRef.current.value = "";
    rememberUserRef.current.checked = false;
    setShowPassword(false);
    console.log(errors);
  };

  return (
    <section className={classes.container}>
      <h2>Sign In</h2>
      <form onSubmit={formSubmitHandler}>
        <div className={classes["inputfield"]}>
          <label htmlFor="username">Email</label>
          <input
            type="text"
            placeholder="Enter your email"
            id="username"
            ref={userEmailRef}
          />
        </div>

        <div className={classes["inputfield"]}>
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

      <div className={classes["signup_link"]}>
        <span>Don't have an account?</span>
        <a href="/signup">Sign up</a>
      </div>
    </section>
  );
};

export default SignIn;
