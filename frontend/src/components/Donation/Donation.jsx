import React from "react";
import Card from "../../ui/Card";

function Donation({ donationType, weight, donator }) {
  return (
    <Card>
      <p>
        Donation type: <span>{donationType}</span>
      </p>
      <p>
        Weight: <span>{weight}</span>
      </p>
      <p>
        Donated by: <span>{donator}</span>
      </p>
    </Card>
  );
}

export default Donation;
