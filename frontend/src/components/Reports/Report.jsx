import React from "react";
import Card from "../../ui/Card";
import { useNavigate } from "react-router-dom";

function Report({ id, picture, name }) {
  const navigate = useNavigate();
  // Show details of the Report
  const clickHandler = () => {
    navigate(`/reportDetail/${id}`);
  };
  return (
    <Card imgPath={picture} name={name}>
      <h4>{name}</h4>
      <button onClick={clickHandler} className="btn">
        View Details
      </button>
    </Card>
  );
}

export default Report;
