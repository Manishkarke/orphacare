import React from "react";
import { useNavigate } from "react-router-dom";
import "./Child.css";
import Card from "../../ui/Card";

function Child({ id, name, picture, description }) {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation(`/childdetail/${id}`);
  };

  return (
    <Card imgPath={picture} name={name}>
      <h4>{name}</h4>
      <p>{description}</p>
      <button onClick={clickHandler} className='btn'>
        View Profile
      </button>
    </Card>
  );
}

export default Child;
