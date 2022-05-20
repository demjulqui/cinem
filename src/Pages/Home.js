

import React from 'react';
import LoginPage from '../components/Navbar/Logins';
import { Container, Row, Col } from 'react-bootstrap';


const Homes = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="mt-5">

                        <LoginPage />

                    </Col>
                    <Col></Col>
                </Row>
            </Container>




        </>
    )
}

export default Homes;