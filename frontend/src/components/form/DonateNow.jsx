import React, { useState } from "react";
import customFetch from "../../utils/axios";
import classes from "./Form.module.css";

function DonateNow() {
  const [donation, setDonation] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    weight: NaN,
    howOld: NaN,
    type: "food",
  });
  // Handle Change of Name input field
  const nameChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, name: event.target.value };
    });
  };

  // Handle change of address input field
  const addressChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, address: event.target.value };
    });
  };

  // Handle Change of Phone number Input field
  const phoneNumberChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, phoneNumber: event.target.value };
    });
  };

  // Handle change of Email Input Field
  const emailChangeHandler = (event) => {
    setDonation((prevDonation) => {
      return { ...prevDonation, email: event.target.value };
    });
  };

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

    try {
      const response = await customFetch.post("/home");
    } catch (errors) {
      console.log(errors);
    }
  };
  return (
    <section className={classes["container"]}>
      <h2>Donate Now</h2>
      <form method='POST' onSubmit={formSubmitHandler}>
        <div className={classes["inputfield"]}>
          <label htmlFor='username'>Name</label>
          <input
            type='text'
            name='username'
            id='username'
            value={donation.name}
            onChange={nameChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            name='address'
            id='address'
            value={donation.address}
            onChange={addressChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input
            type='text'
            name='phoneNumber'
            id='phoneNumber'
            value={donation.phoneNumber}
            onChange={phoneNumberChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            id='email'
            value={donation.email}
            onChange={emailChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='weight'>Weight/Quantity</label>
          <input
            type='number'
            name='weight'
            id='weight'
            value={donation.weight}
            onChange={weightChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='howOld'>How Old</label>
          <input
            type='number'
            name='howOld'
            id='howOld'
            value={donation.howOld}
            onChange={howOldChangeHandler}
          />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='type'>Types(Food/Cloth/Books)</label>
          <select name='type' id='type' value={donation.type} onChange={typeChangeHandler}>
            <option value='food'>Food</option>
            <option value='cloth'>Cloth</option>
            <option value='book'>Books</option>
            <option value='combobox'>Combo Box</option>
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
