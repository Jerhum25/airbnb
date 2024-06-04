import React from 'react';
import './footer.scss'
import FooterMenu from '../FooterMenu/FooterMenu';
import FooterCopyright from '../FooterCopyright/FooterCopyright';
function Footer(props) {
    return (
        <div className='footerContainer'>
            <FooterMenu/>
            <FooterCopyright/>
        </div>
    );
}

export default Footer;