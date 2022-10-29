import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div`
    border : 2px solid blue;
    display : flex;
    flex-direction : column;
    //align-items : center;
    width : 30%;
    height : 30%;
    margin-bottom : 50px;
    border-radius : 10px;
`

const CardImg = styled.img`
    height : 100%;
    width : 100%;
    border-radius : 10px;
    object-fit: cover;
`

const CardSpan = styled.span`
    display : block;
    background-color : red;
    //width : 100%;
    //margin : 0px 20px 0px 20px;
    padding-left : 20px;
    postion : absolute;
    left: 0; right : 0; bottom : 0;
`

function Card({ title, cover }) {
    return (
        <CardDiv>
            <CardImg src={cover} alt="freelance" />
            <CardSpan>{title}</CardSpan>
        </CardDiv>
    )
}

Card.propTypes = {
    title : propTypes.string.isRequired,
    cover : propTypes.string.isRequired,
}

Card.defaultProps = {
    title: 'Oups... le titre ne s\'affiche pas !',
}
 
export default Card