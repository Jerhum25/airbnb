import React from "react";
import "./nav.scss";

function Nav(props) {
  return (
    <div className="navContainer">
      <div className="logo">
        <i className="fa-brands fa-airbnb"></i>
        <h1>airbnb</h1>
      </div>
      <div className="navCenter">
        <a href="a">Logements</a>
        <a href="a">Expériences</a>
        <a href="a">Expériences en ligne</a>
      </div>
      <div className="navRight">
        <a href="a">Mettre mon logement sur Airbnb</a>
        <a href="a"><i className="fa-solid fa-globe"></i></a>
        <a href="a" className="user">
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-circle-user"></i>
        </a>
      </div>
    </div>
  );
}

export default Nav;
