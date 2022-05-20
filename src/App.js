import React, { useState, useEffect } from 'react';

import NavbarHome from './components/Navbar/navbar';
import HomePage from './Pages/Correla';
import Home from './components/Landing/Home';
import Services from './components/Landing/Services';
import Navbar from './components/Landing/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landin from './components/Landing/LandinP';
import NoPage from './Pages/NoPage';
import HomeLanding from './components/Landing/Home';
import Trend from './Pages/Trend';
import Contact from './Pages/Contact';



export default function App() {
  return (

    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLanding />} />
          <Route path="Trend" element={<Trend />} />
          <Route path="Services" element={<Services />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

