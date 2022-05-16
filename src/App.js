
import './App.css';
import Album from './components/Album';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Layout from './Pages/Layout';
import Trend from './Pages/Trend';
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

