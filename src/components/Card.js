import React from "react";
import "./Card.css";

function Card({ src, title, description, price }) {
  return (
    <div className="card">
      <img src={src} alt="imagen proyecto" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Card;
