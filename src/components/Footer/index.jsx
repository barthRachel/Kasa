import React from 'react';
import logo from '../../images/D_logo.png'; //à remplacer par le logo footer

function Footer() {
    return (
        <div>
            <p>
                <img src={logo} alt="Logo Kasa" />
            </p>
            <p>
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}

export default Footer