import React from 'react';
import ImgHome from '../../images/D_presentation.png';
import ImgAbout from '../../images/D_presentation_about.png';
import styled from 'styled-components';

const PresentationImgDiv = styled.div`
    margin : 70px 100px 100px 100px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const PresentationImgFond = styled.img`
    width : 100%;
    height : 100%;
    border-radius : 10px;
    filter: brightness(70%);
`

const PresentationImgTitre = styled.h1`
    position : absolute;
    top : 47%;
    font-size : 48px;
    color : white;

`

function PresentationImg() {
    const location = window.location.href.split('/')[3];
    console.log(location)

    if(location === ""){
        return(
            <PresentationImgDiv>
                <p>
                    <PresentationImgFond src={ImgHome} alt="Paysage représentant une côte" />
                </p>
                <PresentationImgTitre>Chez vous, partout et ailleurs</PresentationImgTitre>
            </PresentationImgDiv>
        )
    } else if(location === "about"){
        return (
            <PresentationImgDiv>
                <p>
                    <PresentationImgFond src={ImgAbout} alt="Paysage représentant une montagne" />
                </p>
                <h1>Un truc là</h1>
            </PresentationImgDiv>
        )
    }
}

export default PresentationImg