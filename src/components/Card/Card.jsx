import React from 'react';
import './card.scss'

function Card({img, alt, destination, owner, dates, price}) {
    return (
        <div className='cardContainer'>
            <div className="image"><img src={img} alt={alt}/></div>
            <div className="infos">
                <h3 className="destination">{destination}</h3>
                <p className="owner">{owner}</p>
                <p className="dates">{dates}</p>
                <p className="price"><span>{price}€</span> par nuit</p>
            </div>
            <div className="heart"><i className="fa-regular fa-heart"></i></div>
        </div>
    );
}

export default Card;