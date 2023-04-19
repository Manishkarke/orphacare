import React, { useEffect, useState } from "react";
import classes from "../form/Form.module.css";
import Khalti from "../../utils/Khalti";
import { createDonationAmountApiHandler } from "../../utils/axios";
import { donateMoneyValidator } from "../../utils/errorHandler";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DonateMoney() {
  const [donateAmount, setDonateAmount] = useState();
  const [error, setError] = useState("");

  // Donate money
  const donationAmountChangeHanlder = (event) => {
    setDonateAmount(event.target.value);
  };

  // Execute when donate money button is clicked
  const donateMoneyHandler = async () => {
    donateMoneyValidator(donateAmount, setError);

    try {
      const isSuccess = await Khalti(donateAmount);
      if (isSuccess) {
        const response = await createDonationAmountApiHandler(donateAmount);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <>
      <div className={classes["inputfield"]}>
        <label htmlFor="donateMoney">Donate Money</label>
        <input
          type="number"
          name="donation Amount"
          id="donateMoney"
          value={donateAmount}
          onChange={donationAmountChangeHanlder}
        />
      </div>
      <button
        className={classes["btn"]}
        type="button"
        onClick={donateMoneyHandler}
      >
        Donate Money
      </button>

      <ToastContainer />
    </>
  );
}

export default DonateMoney;
