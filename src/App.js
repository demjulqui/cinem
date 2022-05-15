
import './App.css';
import Album from './components/Album';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import Layout from './Pages/Layout';
import Trend from './Pages/Trend';
import NavbarHome from './components/Navbar/navbar';





export default function App() {
  return (
    <>
      <NavbarHome />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Trend" element={<Trend />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

