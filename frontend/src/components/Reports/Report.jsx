import React, { useEffect } from "react";
import Card from "../../ui/Card";
import { useNavigate } from "react-router-dom";

function Report({ id, picture, name, description }) {
  const navigate = useNavigate();
  // Show details of the Report
  useEffect(() => {
    console.log(`Image url is ${picture}`);
  }, []);
  const clickHandler = () => {
    navigate(`/reportDetail/${id}`);
  };
  return (
    <Card imgPath={picture} name={name}>
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={clickHandler} className="btn">
        View Details
      </button>
    </Card>
  );
}

export default Report;
