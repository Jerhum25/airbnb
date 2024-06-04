import React from "react";
import "./footerCopyright.scss";

function FooterCopyright(props) {
  return (
    <div className="footerCopyrightContainer">
      <div className="infosLinks">
        <p>&copy; 2024 Airbnb, Inc</p>
        <a href="a">Confidentialité</a>
        <a href="a">Conditions générales</a>
        <a href="a">Plan du site</a>
        <a href="a">Fonctionnement du site</a>
        <a href="a">Infos sur l'entreprise</a>
      </div>
      <a href="a" className="country">
        <i className="fa-solid fa-globe"></i>
        <p>Français(FR)</p>
      </a>
      <a href="a" className="money">
        € <p> EUR</p>
      </a>
      <div className="socialNetworks">
        <a href="a">
          <i className="fa-brands fa-square-facebook"></i>
        </a>
        <a href="a">
          <i className="fa-brands fa-square-twitter"></i>
        </a>
        <a href="a">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
      </div>
    </div>
  );
}

export default FooterCopyright;
