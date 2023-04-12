import React from "react";
import Card from "../../ui/Card";

function Volunteer({ imgPath, name, age }) {
  return (
    <Card imgPath={imgPath} name={name}>
      <h4>{name}</h4>
      <span>{age} years old</span>
    </Card>
  );
}

export default Volunteer;
