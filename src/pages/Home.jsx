import React from 'react';
import DImgHome from '../images/D_pres.png';
import MImgHome from '../images/M_pres.png';
import Banner from '../components/Banner';
import rentalInfos from '../logements.json';
import Card from '../components/Card';
import '../css/Home.css';

function Home() {
  document.title = "Accueil";
  
  let imgBanner;

  if(window.innerWidth > 767){
    imgBanner = DImgHome;
  } else {
    imgBanner = MImgHome;
  }

  return(

      <div className='divBoxPages'>
        <Banner 
          pathImg={imgBanner}
          title="Chez vous, partout et ailleurs" 
        />

        <div className='rentaListDiv secondary'>
          {rentalInfos.map((infos, index) => (
            <Card
              key={`${infos.name}-${index}`}
              cover={infos.cover}
              title={infos.title}
              id={infos.id}
            />
          ))}
        </div>
      </div>
  )
}

export default Home