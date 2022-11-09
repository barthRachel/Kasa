/* Composant Banner qui affiche l'image de présentation des pages Home et About */
import './banner.css'
import React from 'react';
import propTypes from 'prop-types';


function Banner({ pathImg, title }) {

    return (
        <div className='presentationDiv'> 
            <p className='presentationParagraph'> 
                <img src={pathImg} alt="Paysage représentant une côte" className='presentationImg'/> 
            </p>
            <h1 className='title'>{title}</h1>
        </div> 
    )
}

Banner.propTypes = {
    pathImg : propTypes.string.isRequired,
    title : propTypes.string,
}

export default Banner