const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Error Handler for Registration form
function registrationValidator(
    { userName, userPassword, userAddress, userEmail },
    confirmPassword,
    setErrors
) {

    // Validate userName
    if (!userName.trim()) {
        // error.userName = "Username is required";
        setErrors((prevErrors) => {
            return { ...prevErrors, userName: "Username is required" };
        });
    } else {
        setErrors((prevErrors) => {
            return { ...prevErrors, userName: "" };
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

}

// Error Handler for Sign In page
function signInFormValidator({ userEmail, userPassword }, setErrors) {
    // Email
    if (!userEmail.trim()) {
        setErrors((prevErrors) => {
            return { ...prevErrors, emailError: "Email is Required" };
        });
    } else if (!userEmail.match(emailRegex)) {
        setErrors((prevErrors) => {
            return { ...prevErrors, emailError: "Email is not Valid" };
        });
    } else {
        setErrors((prevErrors) => {
            return { ...prevErrors, emailError: "" };
        });
    }

    // Password
    if (!userPassword.trim()) {
        setErrors((prevErrors) => {
            return { ...prevErrors, passwordError: "Password is Required" };
        });
    } else {
        setErrors((prevErrors) => {
            return { ...prevErrors, passwordError: "" };
        });
    }
}

// Error Handler Form DOnation page
function dontionFormValidator({ weight }, setErrors) {

    // Weight Validator
    if (!weight) {
        setErrors(prevErrors => { return { ...prevErrors, weight: "Weight is required" } });
    } else if (weight < 0) {
        setErrors(prevErrors => { return { ...prevErrors, weight: "Weight cannot be Negative" } });
    } else {
        setErrors(prevErrors => { return { ...prevErrors, weight: "" } });
    }

}

// Error Handler For Report page
function reportFormValidator({ lastSeenAddress, childEstimatedAge }, setErrors) {
    // valiidate Address field
    lastSeenAddress = "Hamro Address";
    if (!lastSeenAddress.trim()) {
        setErrors((prevErrors) => {
            return { ...prevErrors, address: "Address is Required." };
        });
    } else {
        setErrors((prevErrors) => {
            return { ...prevErrors, address: "" };
        });
    }

    // validate child's age
    if (!childEstimatedAge) {
        setErrors((prevErrors) => {
            return { ...prevErrors, age: "Age is Required" };
        });
    } else {
        setErrors((prevErrors) => {
            return { ...prevErrors, age: "" };
        });
    }
}

export { registrationValidator, signInFormValidator, dontionFormValidator, reportFormValidator };