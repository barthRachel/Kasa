import '../css/About.css';
import React from 'react';
import DImgAbout from '../images/D_presentation_about.png';
import MImgAbout from '../images/M_presentation_about.png';
import Banner from '../components/Banner';
import aboutInfos from '../about.json';
import Collapse from '../components/Collapse';

function About() {
    document.title = "A propos";
    
    const widthScreen = window.innerWidth;
    let imgBanner;
  
    if(widthScreen > 767){
      imgBanner = DImgAbout;
    } else {
      imgBanner = MImgAbout;
    }

    return(
        <div className='divBoxPages'>
            <Banner 
                pathImg={imgBanner}
                title="" 
            />

            <div className='aboutCollapse'>
                {aboutInfos.map((infos, index) => (
                    <Collapse
                        key={`${infos.title}-${index}`}
                        title={infos.title}
                        texte={infos.texte}
                    />
                ))}
            </div>
        </div>
    )
}

export default About