import React, { useState } from "react";
import { addReportApiHandler } from "../../utils/axios";
import { reportFormValidator } from "../../utils/errorHandler";
import classes from "./Form.module.css";
import ReactMap from "../Map/ReactMap";

function Report() {
  // Report State Variable to Store all the input's value
  const [report, setReport] = useState({
    childImage: null,
    lastSeenTime: new Date().toISOString().slice(0, 16),
    childEstimatedAge: NaN,
    remarks: "",
  });

  // State variable to Store errors
  const [errors, setErrors] = useState({});

  // Input-Field Change Handlers
  // CHild image
  const imageChangeHandler = (event) => {
    console.log(event);
    setReport((prevReport) => {
      return { ...prevReport, childImage: event.target.files[0] };
    });
  };
  // Last Seen Address

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

    reportFormValidator(report, setErrors);
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
        const response = await addReportApiHandler(report);
        console.log(response);
      } catch (error) {}
    }
  };
  return (
    <section className={classes["container"]}>
      <h2>Report</h2>
      <form action='POST' onSubmit={formSubmitHandler}>
        <div className={`${classes["inputfield"]}`}>
          <label htmlFor='child-img'>Child's Photo</label>
          <input
            type='file'
            name='child-img'
            id='child-img'
            value={""}
            onChange={imageChangeHandler}
          />

          {}
        </div>

        <div className={`${classes["inputfield"]} ${errors.address ? classes["input-error"] : ""}`}>
          <label htmlFor='lastSeenAddress'>Last Seen Address</label>
          <ReactMap />
          {errors.address && <span>{errors.address}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='lastSeenTime'>Last Seen Time</label>
          <input
            type='datetime-local'
            name='lastSeenTime'
            id='lastSeenTime'
            value={report.lastSeenTime}
            onChange={seenTimeInputChangeHandler}
          />
        </div>

        <div className={`${classes["inputfield"]} ${errors.age ? classes["input-error"] : ""}`}>
          <label htmlFor='estimatedAge'>Child Estimated Age</label>
          <input
            type='number'
            name='estimatedAge'
            id='estimatedAge'
            value={report.childEstimatedAge}
            onChange={childAgeInputChangeHandler}
          />
          {errors.age && <span>{errors.age}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='remarks'>Remarks</label>
          <textarea
            name='remarks'
            id='remarks'
            cols='30'
            rows='3'
            value={report.remarks}
            onChange={remarksInputChangeHandler}
          />
        </div>

        <button type='submit' className={classes["btn"]}>
          Report
        </button>
      </form>
    </section>
  );
}

export default Report;
