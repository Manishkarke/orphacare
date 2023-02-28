function registrationValidator(
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

    // setErrors(error);
}


function dontionFormValidator({ name, address, phoneNumber, email, weight, howOld }, setErrors) {
    // Name validator

}

export { registrationValidator, dontionFormValidator }