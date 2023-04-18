import React from "react";
import DonationList from "../components/Donation/DonationList";
import DonateNow from "../components/form/DonateNow";
import "./Route.css";

function DonationRoute() {
  return (
    <div className="route-div">
      <DonationList />
      <DonateNow />
    </div>
  );
}

export default DonationRoute;
