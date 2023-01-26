import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css'
import Home from './pages/Home';
import Quote from './pages/Quote';
import Book from './pages/Book';
import Movie from './pages/Movie';
import Error from './components/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Header/>
    
    <Routes>
      <Route exact path='/panda-dev' element={<Home />} />

      <Route path='/quote' element={<Quote />} />

      <Route path='/book' element={<Book />} />

      <Route path='/movie' element={<Movie />} />

      <Route path='/portfolio' element={<Portfolio/>} />

      <Route path='/*' to="/error_404" element={<Error/>} />
    </Routes>
    
    <Footer />
  </Router>
);