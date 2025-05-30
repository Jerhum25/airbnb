import React from "react";
import "./nav.scss";

function Nav(props) {
  function modal(e) {
    const modal = document.querySelector(".userModal");
    modal.classList.toggle("active");
  }

  return (
    <div className="navContainer">
      <div className="logo">
        <i className="fab fa-airbnb"></i>
        <h1>airbnb</h1>
      </div>
      <div className="navCenter">
        <a href="a">Logements</a>
        <a href="a">Expériences</a>
        <a href="a">Expériences en ligne</a>
      </div>
      <div className="navRight">
        <a href="a">Mettre mon logement sur Airbnb</a>
        <a href="a">
          <i className="fas fa-globe"></i>
        </a>
        <div href="a" className="user" onClick={modal}>
          <i className="fas fa-bars"></i>
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="userModal">
          <a href="a">Inscription</a>
          <a href="a">Connexion</a>
          <hr />
          <a href="a">Cartes cadeaux</a>
          <a href="a">Mettre mon logement sur Airbnb</a>
          <a href="a">Centre d'aide</a>
        </div>
      </div>
    </div>
  );
}

export default Nav;
