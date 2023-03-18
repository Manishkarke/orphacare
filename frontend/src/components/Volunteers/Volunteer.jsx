import React from "react";

function Volunteer({ picture, name, address, description }) {
  return (
    <article className='card'>
      <div className='card-image'>
        <img src={picture} alt={name} />
      </div>
      <div className='card-info'>
        <h4>{name}</h4>
        <span>{address}</span>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default Volunteer;
