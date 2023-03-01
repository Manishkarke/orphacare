const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

    // setErrors(error);
}


function dontionFormValidator({ name, address, phoneNumber, email, weight, howOld }, setErrors) {
    // Name validator
    if (!name.trim()) {
        setErrors(prevErrors => {
            return { ...prevErrors, name: "Name is required" }
        });
    } else if (name.match(emailRegex)) {
        setErrors(prevErrors => { return { ...prevErrors, name: "Name is invalid" } });
    } else {
        setErrors(prevErrors => {
            return { ...prevErrors, name: "" }
        })
    }

    // Address Validator
    if (!address.trim()) {
        setErrors(prevErrors => { return { ...prevErrors, address: "Address is required" } })
    } else {
        setErrors(prevErrors => { return { ...prevErrors, address: "" } })
    }

    // Phone number validator
    if (!phoneNumber.trim()) {
        setErrors(prevErrors => { return { ...prevErrors, phoneNumber: "Phone number is required" } })
    } else {
        setErrors(prevErrors => { return { ...prevErrors, phoneNumber: "" } })
    }

    // Email validator 
    if (!email.trim()) {
        setErrors(prevErrors => { return { ...prevErrors, email: "Email is required" } });
    } else if (!email.match(emailRegex)) {
        setErrors(prevErrors => { return { ...prevErrors, email: "Email is Invalid" } });
    } else {
        setErrors(prevErrors => { return { ...prevErrors, email: "" } });
    }

    // Weight Validator
    if (!weight) {
        setErrors(prevErrors => { return { ...prevErrors, weight: "Weight is required" } });
    } else if (weight < 0) {
        setErrors(prevErrors => { return { ...prevErrors, weight: "Weight cannot be Negative" } });
    } else {
        setErrors(prevErrors => { return { ...prevErrors, weight: "" } });
    }

    // How Old Validator
    if (!howOld) {
        setErrors(prevErrors => { return { ...prevErrors, howOld: "Age is required" } });
    } else if (howOld < 0) {
        setErrors(prevErrors => { return { ...prevErrors, howOld: "Age cannot be Negative" } });
    } else {
        setErrors(prevErrors => { return { ...prevErrors, howOld: "" } });
    }
}

export { registrationValidator, dontionFormValidator }