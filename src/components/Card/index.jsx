/* Composant Card qui affiche un la photo et le titre d'un logement sous forme de carte */
import './card.css';
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Card({ title, cover, id }) {
    return (
        <Link to={'/rental/' + id} className='cardDiv' data-id={id} >
            <img className='cardImg' src={cover} alt={`${title} cover`} />
            <span className='cardSpan'>{title}</span>
        </Link>
    )
}

Card.propTypes = {
    title : propTypes.string.isRequired,
    cover : propTypes.string.isRequired,
    id : propTypes.string.isRequired,
}

Card.defaultProps = {
    title: 'Oups... le titre ne s\'affiche pas !',
}
 
export default Card