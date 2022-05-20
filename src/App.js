import React, { useState, useEffect } from 'react';
import Home from './components/Landing/Home';
import Services from './components/Landing/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NoPage from './Pages/NoPage';
import HomeLanding from './components/Landing/Home';
import Trend from './Pages/Trend';
import Contact from './Pages/Contact';
import Homes from './Pages/Home';
import Profile from './Pages/Profile';



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
          <Route path="Login" element={<Homes />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

