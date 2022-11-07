import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import RentalSheet from './pages/RentalSheet';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


const rootElement = document.getElementById('root');

render(
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route path='/about' element={<About />} />

      <Route path='/rental/:id' element={ <RentalSheet /> } />

      <Route path='/*' element={<Error/>} />
    </Routes>
    
    <Footer />
  </Router>,

  rootElement
);