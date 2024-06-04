import React from 'react';
import './categories.scss';
import Category from '../Category/Category';
function Categories(props) {
    return (
        <div className='categoriesContainer'>
            <Category srcImg="./images/iconique.webp" alt="" category="Iconiques"/>
            <Category srcImg="./images/piscines.jpg" alt="Piscines" category="Piscines"/>
            <Category srcImg="./images/bord-de-mer.jpg" alt="bord-de-mer" category="Bord de mer"/>
            <Category srcImg="./images/campagne.jpg" alt="Campagne" category="Campagne"/>
            <Category srcImg="./images/chalets-tipi.jpg" alt="Chalets Tipi" category="Chalets Tipi"/>
            <Category srcImg="./images/chambres.jpg" alt="Chambres" category="Chambres"/>
            <Category srcImg="./images/avec-vue.jpg" alt="Avec vue" category="Avec vue"/>
            <Category srcImg="./images/cabanes-perchees.jpg" alt="Cabanes perchées" category="Cabanes perchées"/>
            <Category srcImg="./images/wow.jpg" alt="Wow !" category="Wow !"/>
            <Category srcImg="./images/cabanes.jpg" alt="Cabanes" category="Cabanes"/>
            <Category srcImg="./images/fermes.jpg" alt="Fermes" category="Fermes"/>
            <Category srcImg="./images/chateaux.jpg" alt="Châteaux" category="Châteaux"/>
            <Category srcImg="./images/tiny-houses.jpg" alt="Tiny houses" category="Tiny houses"/>
            <Category srcImg="./images/lacs.jpg" alt="Lacs" category="Lacs"/>
            <Category srcImg="./images/bord-de-lac.jpg" alt="Bord de lac" category="Bord de lac"/>
        </div>
    );
}

export default Categories;