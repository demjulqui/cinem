import PopularMovie from "../components/Popular/PopularMovie";
import PopularDay from "../components/Popular/PopularDay";
import CercaBox from "../components/Navbar/Cerca";
import SearchBox from "../components/Navbar/Search";
import { Container, Row, Col } from "react-bootstrap";


const Trend = () => {
    return (

        <Container>
            <Row>

                <Col>

                    <PopularDay />

                </Col>
                <Col>

                    <PopularMovie />
                </Col>
            </Row>


        </Container>


    )

};

export default Trend; 