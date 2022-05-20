

import Banner from "../components/Banner/Banner";
import TVWatch from "../components/Cards/FilmTv";
import TVInfo from "../components/MovieInfo/TVPo";
import NavbarHome from "../components/Navbar/navbar";
import { Container } from "react-bootstrap";
import GenreAzione from "../components/Genre/GenreAzione";
import Banner2 from "../components/Banner/Banner2";
import GenreAvventura from "../components/Genre/GenreAventura";
import GenreAnimazione from "../components/Genre/GenreAnimazione";
import GenreCommedia from "../components/Genre/GenreCommedia";
import GenreCrime from "../components/Genre/GenreCrime";
import GenreDocumentario from "../components/Genre/GenreDocumentario";
import GenreDramma from "../components/Genre/GenreDramma";
import GenreFamily from "../components/Genre/GenreFamiglia";
import GenreKids from "../components/Genre/GenreKids";
import GenreMisery from "../components/Genre/GenreMistero";
import GenreNews from "../components/Genre/GenreNews";
import GenreReality from "../components/Genre/GenreReality";
import GenreSciFi from "../components/Genre/genreSciFi";
import Footer from "../components/Footer/Footer";




const Contact = () => {
    return <>
        <div className="contactBackGround">
            <NavbarHome />
            <Banner2 />
            <GenreAzione />
            <GenreAvventura />
            <GenreAnimazione />
            <GenreCommedia />
            <GenreCrime />
            <GenreDocumentario />
            <GenreDramma />
            <GenreFamily />
            <GenreKids />
            <GenreMisery />
            <GenreNews />
            <GenreReality />
            <GenreSciFi />
            <Footer />
        </div>


    </>;
};

export default Contact;