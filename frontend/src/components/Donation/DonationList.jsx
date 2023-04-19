import React, { useEffect, useState } from "react";

import { getAllDontionApiHandler } from "../../utils/axios";
import Donation from "./Donation";

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllDontionApiHandler();

      if (response.data.status === "success") {
        setDonations(response.data.data);
      } else if (response.data.status === "error") {
        console.log(response.data.message);
      }
    })();
  }, [donations]);
  return (
    <section>
      <div className="section-title">
        <h2>Donation List</h2>
      </div>
      <section className="card-list sidebar-list">
        {donations.map(({ id, weight, donationType, donator }) => {
          return (
            <Donation
              key={id}
              donationType={donationType}
              weight={weight}
              donator={donator.name}
            />
          );
        })}
      </section>
    </section>
  );
}

export default DonationList;
