import React from "react";
import { useNavigate } from "react-router-dom";
import "./Child.css";
import Card from "../../ui/Card";
// import Button from "../../ui/Button";

function Child({ id, name, picture, description }) {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation(`/childdetail/${id}`);
  };

  return (
    <Card imgPath={picture} name={name}>
      <h4>{name}</h4>
      <p>{description}</p>
      <button type="button" className="btn" onClick={clickHandler}>View Profile</button>
      {/* <Button
        btnType="button"
        type="link"
        btnFunction={clickHandler}
        detail="View Profile"
      /> */}
    </Card>
  );
}

export default Child;
