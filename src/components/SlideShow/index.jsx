/* Composant SlideShow qui affiche le carroussel d'image disponible pour le logement sur lequel on a cliqué */
import './slideshow.css';
import React, { useState } from 'react';
import chevronLeft from '../../images/ChevronLeft.png';
import chevronRight from '../../images/ChevronRight.png';


function Slideshow({ pictureList }) {

    const lenghtPictureList = pictureList.length;
    let styleDisplay;

    
    //si le logement n'a qu'une seule image les chevrons et le numéro de photo ne s'affichent pas
    lenghtPictureList === 1 ? styleDisplay = "none" : styleDisplay = "flex";

    let [index, setIndex] = useState(0);

    function chevronNext(){
        setIndex((curIndex) =>
            curIndex === lenghtPictureList - 1 ? 0 : curIndex + 1
        )
    }

    function chevronPrevious(){
        setIndex((curIndex) =>
            curIndex === 0 ? lenghtPictureList - 1 : curIndex -1
        )

    }

  return (
        <div className="slideShowDiv" >
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {pictureList.map((infos, index) => (
                    <div
                        className="slideShowImg"
                        key={`${infos[index]}-${index}`}
                    > 
                        <img src={pictureList[index]} alt="Slideshow Rental" />

                        <div className='number' style={{display : styleDisplay}}>
                            {index+1 + " / " + lenghtPictureList}
                        </div>
                    
                    </div>
                ))}
            </div>
            
            <div className='changePicture' style={{display : styleDisplay}}  >
              <p className='previous' onClick={chevronPrevious}> <img src={chevronLeft} alt="Chevron left" /> </p>
              <p className='next' onClick={chevronNext}> <img src={chevronRight} alt="Chevron right" /> </p> 
            </div>
        </div>
  );
}


export default Slideshow