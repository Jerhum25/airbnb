import React from "react";
import data from "../../data/data.json";
import Card from "../Card/Card";
import "./cards.scss";

function Cards(props) {
  return (
    <div className="cardsContainer">
      {data.map((item) => (
        <Card
          key={item.id}
          img={item.images}
          alt={item.city}
          destination={item.city + ", " + item.country}
          owner={item.owner}
          dates={item.dates}
          price={item.price_per_night}
        />
        // console.log(item.id)
      ))}
    </div>
  );
}

export default Cards;
