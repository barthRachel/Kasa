/* Composant Header - la tête de page qui contient la navigation de l'application */
import './header.css';
import { Link } from 'react-router-dom';
import React, { useState }  from 'react';
import logo from '../../images/D_logo.png';



function Header() {

    const urls = ["/", "/about"]
    const [inWhichUrl, setUrl] = useState(urls[0]);

    const changeIsHome = () => {
        setUrl(urls[0]);
    }

    const changeIsAbout = () => {
        setUrl(urls[1]);
    }

    return (
        <div className='headerDiv'>
            <Link to="/" onClick={changeIsHome}>
                <img src={logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <Link to="/" className={(inWhichUrl === "/" ? "navigationOn" : "navigationLink") + " primary"} onClick={changeIsHome} /*className='navigationLink primary'*/>Accueil</Link>
                <Link to="/about" className={(inWhichUrl === "/about" ? "navigationOn" : "navigationLink") + " primary"} onClick={changeIsAbout} /*className='navigationLink primary'*/>A Propos</Link>
            </nav>

        </div>
    )
}

export default Header