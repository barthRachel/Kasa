/* Composant Footer - le pied de page de l'application */
import './footer.css'
import React from 'react';
import logo from '../../images/logo_footer.png';

function Footer() {
    return (
        <div className='footerDiv'>
            <p className='footerParagraph'>
                <img src={logo} alt="Logo Kasa" /> <br/>
            </p>
            <p className='footerParagraph'>
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}

export default Footer