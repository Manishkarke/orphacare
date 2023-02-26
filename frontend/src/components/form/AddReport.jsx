import React, { useState } from "react";
import customFetch from "../../utils/axios";
// import NepaliDate from "nepali-date-converter";
import classes from "./Form.module.css";

function Report() {
  // Report State Variable to Store all the input's value
  const [report, setReport] = useState({
    userName: "",
    lastSeenAddress: "",
    lastSeenTime: new Date().toISOString().slice(0, 16),
    childEstimatedAge: NaN,
    remarks: "",
  });

  // State variable to Store errors
  const [errors, setErrors] = useState({});

  // Input-Field Change Handlers
  // userName
  const userNameInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, userName: event.target.value };
    });
  };

  // Last Seen Address
  const seenAddressInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, lastSeenAddress: event.target.value };
    });
  };

  // Last Seen Time
  const seenTimeInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, lastSeenTime: event.target.value };
    });
  };

  // Estimated CHild's age
  const childAgeInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, childEstimatedAge: event.target.value };
    });
  };

  // Remarks
  const remarksInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, remarks: event.target.value };
    });
  };

  // Form Submit Logics here
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(report);
    // Validate Form here
    validateForm(report, setErrors);
    console.log(errors);

    // Checking If there is any errors and if not then sending the data to server
    let formIsValid = true;

    for (let error in errors) {
      if (errors[error]) {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      try {
        const response = await customFetch.post()
      } catch (error) {}
    }
  };
  return (
    <section className={classes["container"]}>
      <h2>Report</h2>
      <form action="POST" onSubmit={formSubmitHandler}>
        <div
          className={`${classes["inputfield"]} ${
            errors.userName ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="username">Your Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={report.userName}
            onChange={userNameInputChangeHandler}
          />
          {errors.userName && <span>{errors.userName}</span>}
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.address ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="lastSeenAddress">Last Seen Address</label>
          <input
            type="text"
            name="lastSeenAddress"
            id="lastSeenAddress"
            value={report.lastSeenAddress}
            onChange={seenAddressInputChangeHandler}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="lastSeenTime">Last Seen Time</label>
          <input
            type="datetime-local"
            name="lastSeenTime"
            id="lastSeenTime"
            value={report.lastSeenTime}
            onChange={seenTimeInputChangeHandler}
          />
        </div>

        <div
          className={`${classes["inputfield"]} ${
            errors.age ? classes["input-error"] : ""
          }`}
        >
          <label htmlFor="estimatedAge">Child Estimated Age</label>
          <input
            type="number"
            name="estimatedAge"
            id="estimatedAge"
            value={report.childEstimatedAge}
            onChange={childAgeInputChangeHandler}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="remarks">Remarks</label>
          <textarea
            name="remarks"
            id="remarks"
            cols="30"
            rows="3"
            value={report.remarks}
            onChange={remarksInputChangeHandler}
          />
        </div>

        <button type="submit" className={classes["btn"]}>
          Report
        </button>
      </form>
    </section>
  );
}

export default Report;

// Error Handlers
function validateForm(
  { userName, lastSeenAddress, lastSeenTime, childEstimatedAge },
  setErrors
) {
  // Validate userName field
  if (!userName.trim()) {
    setErrors((prevErrors) => {
      return { ...prevErrors, userName: "Your Name is Required" };
    });
  } else {
    setErrors((prevErrors) => {
      return { ...prevErrors, userName: "" };
    });
  }

  // valiidate Address field
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
