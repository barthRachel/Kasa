/* Composant Error qui affiche une page d'erreur en cas de mauvaise redirection */
import './error.css';
import React from 'react';
import { Link } from 'react-router-dom';
import error404 from '../../images/D_404.png';

function Error() {
  return(
      <div className='divBox primary'>
        <img src={error404} alt="Erreur 404 !" />
        <h1>Oups ! La page que vous demandez n'existe pas.</h1>
        <Link to="/" className='errorLink primary'>Retourner sur la page d'accueil</Link>
      </div>
  )
}

export default Error