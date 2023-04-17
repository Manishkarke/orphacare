import React, { useState } from "react";
import { addDonationApiHandler } from "../../utils/axios";
import classes from "./Form.module.css";
import { dontionFormValidator } from "../../utils/errorHandler";
// import Khalti from "../../utils/Khalti";
import { useNavigate } from "react-router-dom";

function DonateNow() {
  const navigate = useNavigate();
  const [donation, setDonation] = useState({
    weight: NaN,
    donationType: "Food",
  });
  const [donateAmount, setDonateAmount] = useState();
  const [errors, setErrors] = useState({});

  // Handle change of Weight input field
  const weightChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, weight: event.target.value };
    });
  };

  // Select type of donation
  const typeChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, type: event.target.value };
    });
  };

  // Donate money
  const donationAmountChangeHanlder = (event) => {
    setDonateAmount(event.target.value);
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
        const response = await addDonationApiHandler(donation);
        if (response.data.status === "success") {
          navigate("/");
        }
      } catch (errors) {
        console.log(errors);
      }
    }
  };

  // Execute when donate money button is clicked
  const donateMoneyHandler = async (event) => {
    // await Khalti(donateAmount);
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

        <span className={classes["divider"]}>Or</span>

        <div className={classes["inputfield"]}>
          <label htmlFor='donateMoney'>Donate Money</label>
          <input
            type='number'
            name='donation Amount'
            id='donateMoney'
            value={donateAmount}
            onChange={donationAmountChangeHanlder}
          />
        </div>
        <button className={classes["btn"]} type='button' onClick={donateMoneyHandler}>
          Donate Money
        </button>
      </form>
    </section>
  );
}

export default DonateNow;
