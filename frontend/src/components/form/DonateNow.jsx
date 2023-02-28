import React from "react";
import classes from "./Form.module.css";

function DonateNow() {
  return (
    <section className={classes["container"]}>
      <h2>Donate Now</h2>
      <form method='POST'>
        <div className={classes["inputfield"]}>
          <label htmlFor='username'>Name</label>
          <input type='text' name='username' id='username' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='address'>Address</label>
          <input type='text' name='address' id='address' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='phoneNumber'>Phone Number</label>
          <input type='text' name='phoneNumber' id='phoneNumber' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='weight'>Weight/Quantity</label>
          <input type='number' name='weight' id='weight' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='howOld'>How Old</label>
          <input type='number' name='howOld' id='howOld' />
        </div>

        <div className={classes["inputfield"]}>
          <label htmlFor='type'>Types(Food/Cloth/Books)</label>
          <select name='type' id='type'>
            <option value='Food'>Food</option>
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
