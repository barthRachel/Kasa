import { Link } from 'react-router-dom';
import React from 'react';
import logo from '../../images/D_logo.png';
import styled from 'styled-components';

const HeaderDiv = styled.div`
    margin : 40px 100px 0px 100px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const HeaderNav = styled.nav`

`

const StyledLink = styled(Link)`
    text-decoration : none;
    font-size : 24px;
    margin-left : 60px;
    color : #FF6060;

    &:hover{
        text-decoration : underline;
    }

`

function Header() {
    return (
        <HeaderDiv>
            <p>
                <img src={logo} alt="Logo Kasa" />
            </p>
            <HeaderNav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/about">A Propos</StyledLink>
            </HeaderNav>
        </HeaderDiv>
    )
}

export default Header