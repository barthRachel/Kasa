/* Composant SlideShow qui affiche le carroussel d'image disponible pour le logement sur lequel on a cliqué */
import './slideshow.css';
import React, { useState } from 'react';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';


function Slideshow({ pictureList }) {

    const lenghtPictureList = pictureList.length;
    let styleDisplay;
    let widthPicture;
    
    /*var isMobile = false;

    if(window.innerWidth < 768){
        isMobile = true;
    }*/
    
    //si le logement n'a qu'une seule image les chevrons et le numéro de photo ne s'affichent pas
    lenghtPictureList === 1 ? styleDisplay = "none" : styleDisplay = "flex";
    lenghtPictureList === 1 ? widthPicture = "1400px" : widthPicture = "100%"

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
                        <img src={pictureList[index]} alt="Slideshow Rental" style={{width : widthPicture}}/>

                        <div className='number' style={{display : styleDisplay}}>
                            {index+1 + " / " + lenghtPictureList}
                        </div>
                    
                    </div>
                ))}
            </div>
            
            <div className='changePicture' style={{display : styleDisplay}}  >
              <p className='previous' onClick={chevronPrevious}> <FaChevronLeft /> </p>
              <p className='next' onClick={chevronNext}> <FaChevronRight /> </p> 
            </div>
        </div>
  );
}


export default Slideshow