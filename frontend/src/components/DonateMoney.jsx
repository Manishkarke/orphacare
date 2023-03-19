import { useState } from "react";
import Khalti from "../utils/Khalti";

function DonationForm() {
  const [donationAmount, setDonationAmount] = useState("");

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    Khalti(donationAmount);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Donation amount:
        <input type='number' value={donationAmount} onChange={handleDonationAmountChange} />
      </label>
      <button type='submit'>Donate Now</button>
    </form>
  );
}
