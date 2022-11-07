import '../css/RentalSheet.css';
import React from 'react';
import rentalInfos from '../logements.json';
import Slideshow from '../components/SlideShow';
import RateScale from '../components/RateScale';
import Collapse from '../components/Collapse';
//import Error from '../components/Error';
//import { Navigate } from "react-router-dom";

function RentalSheet(){
    const url_id = window.location.href.split('/')[4];

    const emplacementRentalInfos = rentalInfos.findIndex(item => item.id === url_id)
    //console.log(emplacementRentalInfos)

    if(emplacementRentalInfos === -1 ){ //si erreur sur id
        console.log("Ah..")
        /*<Navigate to="*" element={<Error />} />*/
        
    }

    //récupération des informations de la propriété sur laquelle on a cliqué
    const infos = rentalInfos[emplacementRentalInfos];

    //changement dynamique de l'onglet en mettant le titre 
    //de la propriété et la localisation
    document.title = infos.title + " en " + infos.location;

    //récupération des tags du logement
    const tagsList = infos.tags;

    //récupération du nom/prénom de l'hôte
    const name = infos.host.name.split(" ")[1];
    const firstName = infos.host.name.split(" ")[0];

    //récupération de la liste des équipements
    const equipementList = rentalInfos[emplacementRentalInfos].equipments;

    //retour de la partie logement
    return(
        <div className='rentalSheetDivBox'>
            
            <Slideshow pictureList={infos.pictures} />

            <div className='rentalSheetInfosBox'>
                <div className='rentalSheetDescriptionBox'>
                    <div className='rentalSheetDescriptionBoxTitles'>
                        <h1 className='primary' >{infos.title}</h1>
                        <h2 className='primary'>{infos.location}</h2>
                    </div>

                    <ul className='rentalSheetTagLists'>
                        {
                            tagsList.map((infos, index) =>
                                <li className='primaryBackground' key={`${infos[index]}-${index}`}> 
                                    {infos}
                                </li>
                            )
                        }
                    </ul>
                </div>

                <div className='rentalSheetHostBox'>
                    <div className='rentalSheetHostName'>
                        <p className='primary'>{name}<br/>{firstName}</p>
                        <img src={infos.host.picture} alt={`C'est ${infos.host.picture} qui est l'hôte`}/>
                    </div>
                    <RateScale scaleValue={infos.rating}/>
                </div>   
            </div>

            <div className='rentalSheetCollapseBox'>
                <div className='rentalSheetCollapseDesc'>
                    <Collapse
                        title="Description"
                        texte={infos.description}
                    />
                </div>
                <div className='rentalSheetCollapseEquipements'>
                    <Collapse
                        title="Équipements"
                        texte={
                            <ul className='equipementsList'>
                                {
                                    equipementList.map((infos, index) =>
                                        <li key={`${infos[index]}-${index}`}> 
                                            {infos}
                                        </li>
                                    )
                                }
                            </ul>
                        }
                    />
                </div>
            </div>
        </div>
    )
}

export default RentalSheet