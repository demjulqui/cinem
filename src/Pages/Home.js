

import React from 'react';
import LoginPage from '../components/Navbar/Logins';
import { Container, Row, Col } from 'react-bootstrap';


const Homes = () => {

    return (
        <>
        <div className='LoginBackground'>
            <Container>
                <Row>
                    <Col></Col>
                    <Col className="mt-5">

                        <LoginPage className='LoginBackground'/>

                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>



        </>
    )
}

export default Homes;