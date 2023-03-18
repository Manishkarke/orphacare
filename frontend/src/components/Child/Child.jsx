import React from "react";
import { useNavigate } from "react-router-dom";
import "./Child.css";

function Child({ id, name, picture, description }) {
  const navigation = useNavigate();

  const clickHandler = () => {
    navigation(`/childdetail/${id}`);
  };

  return (
    <article className='child'>
      <div className='child-img'>
        <img src={picture} alt={`${name}`} />
      </div>
      <div className='child-info'>
        <h4>{name}</h4>
        <p>{description}</p>
        <button onClick={clickHandler} className='btn'>
          View Profile
        </button>
      </div>
    </article>
  );
}

export default Child;
