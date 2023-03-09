import React, { useState } from "react";
import customFetch from "../../utils/axios";
import classes from "./Form.module.css";
import { dontionFormValidator } from "../../utils/errorHandler";

function DonateNow() {
  const [donation, setDonation] = useState({
    weight: NaN,
    howOld: NaN,
    type: "food",
  });

  const [errors, setErrors] = useState({});

  // Handle change of Weight input field
  const weightChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, weight: event.target.value };
    });
  };

  // Handle change of How Old Input Field
  const howOldChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, howOld: event.target.value };
    });
  };

  // Select type of donation
  const typeChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, type: event.target.value };
    });
  };

  // Is Executed on Form Submit
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    let formIsValid = true;
    dontionFormValidator(donation, setErrors);

    console.log(errors);

    for (let error in errors) {
      if (errors[error]) {
        formIsValid = false;
        break;
      }
    }

    if (formIsValid) {
      try {
        const response = await customFetch.post("/donation/createDonation", {
          weight: donation.weight,
          age: donation.howOld,
          donationType: donation.type,
        });
        console.log(response);
      } catch (errors) {
        console.log(errors);
      }
    }
  };
  return (
    <section className={classes["container"]}>
      <h2>Donate Now</h2>
      <form method='POST' onSubmit={formSubmitHandler}>
        <div className={`${classes["inputfield"]} ${errors.weight ? classes["input-error"] : ""}`}>
          <label htmlFor='weight'>Weight/Quantity</label>
          <input
            type='number'
            name='weight'
            id='weight'
            value={donation.weight}
            onChange={weightChangeHandler}
          />
          {errors.weight && <span>{errors.weight}</span>}
        </div>

        <div className={`${classes["inputfield"]} ${errors.howOld ? classes["input-error"] : ""}`}>
          <label htmlFor='howOld'>How Old</label>
          <input
            type='number'
            name='howOld'
            id='howOld'
            value={donation.howOld}
            onChange={howOldChangeHandler}
          />
          {errors.howOld && <span>{errors.howOld}</span>}
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='type'>Types(Food/Cloth/Books)</label>
          <select name='type' id='type' value={donation.type} onChange={typeChangeHandler}>
            <option value='Food'>Food</option>
            <option value='Cloth'>Cloth</option>
            <option value='Books'>Books</option>
          </select>
        </div>

        <button type='submit' className={classes["btn"]}>
          Donate
        </button>
      </form>
    </section>
  );
}

export default DonateNow;
