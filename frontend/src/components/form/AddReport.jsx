import React, { useState } from "react";
import classes from "./Form.module.css";

function Report() {
  // Report State Variable to Store all the input's value
  const [report, setReport] = useState({
    userName: "",
    lastSeenAddress: "",
    lastSeenTime: "",
    childEstimatedAge: "",
    remarks: "",
  });

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
  return (
    <section className={classes["container"]}>
      <h2>Report</h2>
      <form action="POST">
        <div className={classes["inputfield"]}>
          <label htmlFor="username">Your Name</label>
          <input
            type="text"
            name="username"
            id="username"
            value={report.userName}
            onChange={userNameInputChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="lastSeenAddress">Last Seen Address</label>
          <input
            type="text"
            name="lastSeenAddress"
            id="lastSeenAddress"
            value={report.lastSeenAddress}
            onChange={seenAddressInputChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="lastSeenTime">Last Seen Time</label>
          <input
            type="text"
            name="lastSeenTime"
            id="lastSeenTime"
            value={report.lastSeenTime}
            onChange={seenTimeInputChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor="estimatedAge">Child Estimated Age</label>
          <input
            type="text"
            name="estimatedAge"
            id="estimatedAge"
            value={report.childEstimatedAge}
            onChange={childAgeInputChangeHandler}
          />
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
