import React, { useState, useEffect } from 'react';

import NavbarHome from './components/Navbar/navbar';
import HomePage from './Pages/Correla';
import Home from './components/Landing/Home';
import Services from './components/Landing/Services';
import Navbar from './components/Landing/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landin from './components/Landing/LandinP';

export default function App() {
  return (

    <>
      <Landin />
      <HomePage />


    </>

  );
}

