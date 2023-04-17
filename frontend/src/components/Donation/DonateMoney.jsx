import React, { useState } from "react";
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

    if (error) {
      toast.error(error);
    } else {
      try {
        const isSuccess = await Khalti(donateAmount);
        if (isSuccess) {
          const response = await createDonationAmountApiHandler(donateAmount);
          toast.success("Transaction successfull");
        } else {
          // toast.error("Transaction failed");
        }
        
      } catch (error) {
        console.log(error);
      }
    }
  };
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
