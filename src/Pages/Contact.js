

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





const Contact = () => {
    return <>
        <div>
            <NavbarHome />




            <Banner2 />

            <TVWatch />

            <GenreAzione />
            <GenreAvventura />
            <GenreAnimazione />
            <GenreCommedia />
            <GenreCrime />
        </div>


    </>;
};

export default Contact;