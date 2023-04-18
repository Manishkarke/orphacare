import React, { useEffect, useState } from "react";

import Card from "../../ui/Card";
import { getAllDontionApiHandler } from "../../utils/axios";
import Donation from "./Donation";

function DonationList() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getAllDontionApiHandler();

      if (response.data.status === "success") {
        setDonations(response.data.data);
        console.log(response.data.data[0].donator.name);
      } else if (response.data.status === "error") {
        console.log(response.data.message);
      }
    })();
  }, []);
  return (
    <>
      {/* <div className="section-title">
        <h2>Donation List</h2>
      </div> */}
      <section className="card-list sidebar-list">
        {donations.map(({ id, weight, donationType, donator }) => {
          console.log(donator["id"]);
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
    </>
  );
}

export default DonationList;
