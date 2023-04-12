import React, { useEffect, useState } from "react";
import "./Volunteers.css";
import Volunteer from "./Volunteer";
import { getVolunteerList } from "../../utils/axios";

function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await getVolunteerList();
        setVolunteers((prevVolunteers) => {
          return [...prevVolunteers, ...response.data.data];
        });
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <section className='card-list'>
      {volunteers.map(({ id, name, age, picture }) => {
        return <Volunteer key={id} name={name} age={age} imgPath={picture} />;
      })}
    </section>
  );
}

export default Volunteers;
