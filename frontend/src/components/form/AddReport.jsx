import React, { useState } from "react";
import { addReportApiHandler } from "../../utils/axios";
import { reportFormValidator } from "../../utils/errorHandler";
import classes from "./Form.module.css";
import ReactMap from "../Map/ReactMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

function AddReport({ closeModal }) {
  // Report State Variable to Store all the input's value
  const [report, setReport] = useState({
    childImage: null,
    lastSeenTime: new Date().toISOString().slice(0, 16),
    childEstimatedAge: NaN,
    remarks: "",
    name: "",
  });

  // State variable to Store errors
  const [errors, setErrors] = useState({});

  // Input-Field Change Handlers
  // CHild image
  // const imageChangeHandler = (event) => {
  //   console.log(event);
  //   setReport((prevReport) => {
  //     return { ...prevReport, childImage: event.target.files[0] };
  //   });
  // };
  const imageChangeHandler = (event) => {
    const selectedFile = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setReport((prevReport) => {
        return {
          ...prevReport,
          childImage: selectedFile,
          childImageDataUrl: reader.result,
        };
      });
    };

    if (selectedFile) {
      reader.readAsDataURL(selectedFile);
    }
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

  // Name
  const nameInputChangeHandler = (event) => {
    setReport((prevReport) => {
      return { ...prevReport, name: event.target.value };
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
        if (response.status === 200 && response.data.status === "success") {
          // close the form by updating the state
          closeModal(false);
        }
      } catch (error) {}
    }
  };
  return (
    <section className={`${classes["container"]}`}>
      <div style={{ height: "800px", overflow: "auto" }}>
        <FontAwesomeIcon
          icon={faXmarkCircle}
          onClick={() => closeModal(false)}
          className='cancel'
        />
        <h2>Report</h2>
        <form action='POST' onSubmit={formSubmitHandler}>
          {/* Show the image preview */}
          {/* {report.childImageDataUrl && <img src={report.childImageDataUrl} alt='Selected file' />}
        <div className={`${classes["inputfield"]}`}>
          <label htmlFor='child-img'>Child's Photo</label>
          {!report.childImageDataUrl && (
            <input
              type='file'
              name='child-img'
              id='child-img'
              accept='image/*'
              value={""}
              onChange={imageChangeHandler}
            />
          )}

          {}
        </div> */}
          <div className={`${classes["inputfield"]}`}>
            <label htmlFor='child-img'>Child's Photo</label>
            {!report.childImageDataUrl && (
              <input
                type='file'
                name='child-img'
                id='child-img'
                accept='image/*'
                value={""}
                onChange={imageChangeHandler}
              />
            )}

            {report.childImageDataUrl && (
              <div className={classes["image-preview"]}>
                <img src={report.childImageDataUrl} alt='Child' />
                <button
                  onClick={() => {
                    setReport((prevReport) => {
                      return {
                        ...prevReport,
                        childImageDataUrl: null,
                      };
                    });
                  }}
                >
                  Remove
                </button>
              </div>
            )}
            {}
          </div>
          <div className={classes["inputfield"]}>
            <label htmlFor='name'>Child's Name (Optional)</label>
            <input
              type='text'
              name='name'
              id='name'
              value={report.name}
              onChange={nameInputChangeHandler}
            />
          </div>
          <div
            className={`${classes["inputfield"]} ${errors.address ? classes["input-error"] : ""}`}
          >
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
              min={1}
              max={18}
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
      </div>
    </section>
  );
}

export default AddReport;
