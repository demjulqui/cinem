import React, { useState, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';

import './App.css';
import NavbarHome from './components/Navbar/navbar';
import HomePage from './Pages/Correla';





export default function App() {
  return (
    <>
      <NavbarHome />

      <HomePage />
    </>

  );
}

