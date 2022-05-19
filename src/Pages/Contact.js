

import Banner from "../components/Banner/Banner";
import TVWatch from "../components/Cards/FilmTv";
import TVInfo from "../components/MovieInfo/TVPo";
import NavbarHome from "../components/Navbar/navbar";
import { Container } from "react-bootstrap";
import GenreAzione from "../components/Genre/GenreAzione";
import Banner2 from "../components/Banner/Banner2";


const Contact = () => {
    return <>
        <NavbarHome />
        <Container>



            <Banner2 />

            <TVWatch />

            <GenreAzione />

        </Container>
    </>;
};

export default Contact;