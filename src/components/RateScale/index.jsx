/* Composant RateScale qui permet d'afficher la note sous forme d'étoile de chaque hôte */
import './rateScale.css'
import React from 'react';
import emptyStar from '../../images/empty_star.png';
import plainStar from '../../images/plain_star.png';

function RateScale(props){
    const scaleValue = props.scaleValue
    const range = [1, 2, 3, 4, 5]

    return(

        <div className='rateScaleDiv'>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? 
                <img key={rangeElem.toString()} src={plainStar} alt='Rate star'/> : 
                <img key={rangeElem.toString()} src={emptyStar} alt='Rate star'/>
                
            )}
        </div>        
    )
}
/*⚝
<div>{scaleValue}★</div>*/
export default RateScale