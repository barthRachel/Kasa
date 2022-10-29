import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import Rental from './pages/RentalPage';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  *{
    font-family : 'Montserrat', Helvetica;
  }
`


const rootElement = document.getElementById('root');
render(
  <Router>
    <GlobalStyle />
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route path='/about' element={<About />} />

      <Route path='/rental' element={<Rental />} />

      <Route path='*' element={<Error/>} />

      {/* Ajouter une route pour les erreurs 404*/}
    </Routes>
    <Footer />
  </Router>,

  rootElement
);