import PopularMovie from "../components/Popular/PopularMovie";
import PopularDay from "../components/Popular/PopularDay";
import TopRatedMovie from "../components/Popular/TopRatedMovie";
import { Container, Row, Col } from "react-bootstrap";
import Portada from "../components/Models/Slider/Portada";
import NavbarHome from "../components/Navbar/navbar";


const Trend = () => {
    return (
        <>
            <NavbarHome />
            <Portada />

            <Row>
                <Col>
                    <TopRatedMovie />
                </Col>

                <Col>
                    <PopularDay />
                </Col>
                <Col>
                    <PopularMovie />
                </Col>
            </Row>



        </>


    )

};

export default Trend; 