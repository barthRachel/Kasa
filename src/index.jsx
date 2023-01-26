import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import Home from './pages/Home';
import About from './pages/About';
import RentalSheet from './pages/RentalSheet';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home />} />

      <Route path='/about' element={<About />} />

      <Route path='/rental/:id' element={ <RentalSheet /> } />

      <Route path='/*' to="/error_404" element={<Error/>} />
    </Routes>
    
    <Footer />
  </Router>
);