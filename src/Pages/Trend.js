import PopularMovie from "../components/Popular/PopularMovie";
import PopularDay from "../components/Popular/PopularDay";
import TopRatedMovie from "../components/Popular/TopRatedMovie";
import { Container, Row, Col } from "react-bootstrap";
import Portada from "../components/Models/Slider/Portada";
import NavbarHome from "../components/Navbar/navbar";
import Footer from "../components/Footer/Footer";
import ModalProva from "./prova";


const Trend = () => {
    return (
        <>
            <div className="trendBackground">
                <NavbarHome />
                <Portada />
                <Row>
                    <Col className="mt-5">
                        <TopRatedMovie />
                    </Col>
                    <Col className="mt-5">
                        <PopularDay />
                    </Col>
                    <Col className="mt-5">
                        <PopularMovie />
                    </Col>
                    <ModalProva />



                </Row>
                <Footer />
            </div>
        </>
    )
};

export default Trend; 