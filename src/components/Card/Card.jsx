import React from "react";
import "./card.scss";

function Card({ img, alt, destination, owner, dates, price }) {
  function colorToggle(e) {
    e.target.classList.toggle("colorToggle");
    e.target.classList.toggle("fas");
  }
  // function iconToggle(e){
  // }
  return (
    <div className="cardContainer">
      <div className="image">
        <img src={img} alt={alt} />
      </div>
      <div className="infos">
        <h3 className="destination">{destination}</h3>
        <p className="owner">{owner}</p>
        <p className="dates">{dates}</p>
        <p className="price">
          <span>{price}€</span> par nuit
        </p>
      </div>
      <div className="heart" onClick={colorToggle}>
        <i className="far fa-heart"></i>
      </div>
    </div>
  );
}

export default Card;
