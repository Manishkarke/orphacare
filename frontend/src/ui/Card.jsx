import React from "react";
import "./Card.css";
function Card({ children, imgPath, name }) {
  return (
    <article className="card">
      {imgPath && (
        <div className="card-img">
          <img src={imgPath} alt={name} />
        </div>
      )}
      <div className="card-info">{children}</div>
    </article>
  );
}

export default Card;
