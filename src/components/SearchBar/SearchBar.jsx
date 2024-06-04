import React from "react";
import "./searchBar.scss";

function SearchBar(props) {
  return (
    <div className="searchBarContainer">
      <div className="info">
        <label htmlFor="destination">Destination</label>
        <input type="saerch" placeholder="Rechercher une destination" id="destination" />
      </div>
      <div className="verticalBar"></div>
      <div className="info">
        <label htmlFor="arrival">Arrivée</label>
        <input type="text" placeholder="Quand ?" id="arrival" />
      </div>
      <div className="verticalBar"></div>
      <div className="info">
        <label htmlFor="departure">Départ</label>
        <input type="text" placeholder="Quand ?" id="departure" />
      </div>
      <div className="verticalBar"></div>
      <div className="lastInfo">
      <div className="info">
        <label htmlFor="travelers">Voyageurs</label>
        <input type="text" placeholder="Ajouter des voyageurs" id="travelers" />
      </div>
      <button className="searchBtn"><i className="fa-solid fa-magnifying-glass"></i><p>Rechercher</p></button>
      </div>
    </div>
    
  );
}

export default SearchBar;
