/* Composant Error qui affiche une page d'erreur en cas de mauvaise redirection */
import './error.css';
import React from 'react';
import { Link } from 'react-router-dom';
import DError from '../../images/D_404.png';
import MError from '../../images/M_404.png';

function Error() {

  document.title = "Error 404"

  let error404;

  if(window.innerWidth > 767){
    error404 = DError;
  } else {
    error404 = MError;
  }

  return(
      <div className='divBox primary'>
        <img src={error404} alt="Erreur 404 !" />
        <div>
          <h1>Oups ! La page que vous demandez n'existe pas.</h1>
          <Link to="/" className='errorLink primary'>Retourner sur la page d'accueil</Link>
        </div>
        </div>
  )
}

export default Error