import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Introuvable from './pages/Introuvable';
import Portfolio from './pages/Portfolio'; 
import Savoir from './pages/Savoir';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Savoir" element={<Savoir />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Introuvable />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
