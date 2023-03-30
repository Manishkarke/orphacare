import React from "react";

function Volunteer({ imgPath, name, age }) {
  return (
    <article className='volunteer'>
      <div className='volunteer-img'>
        <img src={imgPath} alt={name} />
      </div>
      <div className='volunteer-info'>
        <h4>{name}</h4>
        <span>{age} years old</span>
      </div>
    </article>
  );
}

export default Volunteer;
