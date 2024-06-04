import React from "react";
import "./footerMenu.scss";
function FooterMenu(props) {
  return (
    <div className="footerMenuContainer">
      <div className="assistance">
        <ul>
          <h3>Assistance</h3>
          <li>
            <a href="a">Centre d'aide</a>
          </li>
          <li>
            <a href="a">AirCover</a>
          </li>
          <li>
            <a href="a">Lutte contre la discrimination</a>
          </li>
          <li>
            <a href="a">Assistance handicap</a>
          </li>
          <li>
            <a href="a">Option d'annulation</a>
          </li>
          <li>
            <a href="a">J'ai un problème de voisinage</a>
          </li>
        </ul>
      </div>
      <div className="assistance">
        <ul>
          <h3>Accueil des voyageurs</h3>
          <li>
            <a href="a">Mettez votre logement sur Airbnb</a>
          </li>
          <li>
            <a href="a">AirCover pour les hôtes</a>
          </li>
          <li>
            <a href="a">Ressources pour les hôtes</a>
          </li>
          <li>
            <a href="a">Forum de la communauté</a>
          </li>
          <li>
            <a href="a">Hébergement responsable</a>
          </li>
          <li>
            <a href="a">
              Participez à un cours gratuit sur l'accueil des voyageurs
            </a>
          </li>
        </ul>
      </div>
      <div className="assistance">
        <ul>
          <h3>Airbnb</h3>
          <li>
            <a href="a">Newsroom</a>
          </li>
          <li>
            <a href="a">Nouvelles fonctionnalités</a>
          </li>
          <li>
            <a href="a">Carrières</a>
          </li>
          <li>
            <a href="a">Investisseurs</a>
          </li>
          <li>
            <a href="a">Cartes cadeaux</a>
          </li>
          <li>
            <a href="a">Séjours d'urgence Airbnb.org</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterMenu;
