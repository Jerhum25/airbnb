import React from "react";
import "./footerCopyright.scss";
import { Link } from "react-router-dom";

function FooterCopyright(props) {
  return (
    <div className="footerCopyrightContainer">
      <div className="infosLinks">
        <p>&copy; 2024 JH Dev</p>
        <a href="a">Confidentialité</a>
        <a href="a">Conditions générales</a>
        <a href="a">Plan du site</a>
        <a href="a">Fonctionnement du site</a>
        <a href="a">Infos sur l'entreprise</a>
      </div>
      <a href="a" className="country">
        <i className="fas fa-globe"></i>
        <p>Français(FR)</p>
      </a>
      <a href="a" className="money">
      <p>€  <span>EUR</span></p>
      </a>
      <div className="socialNetworks">
        <a href={"https://www.facebook.com/AirbnbFrance"} target="_blank">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://x.com/airbnb_fr" target="_blank">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/airbnb/" target="_blank">
          <i className="fab fa-instagram-square"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterCopyright;
