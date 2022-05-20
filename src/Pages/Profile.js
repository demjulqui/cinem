import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Trend from './Trend';
import "./profile.css";


const Profile = () => {

    //faccio una funzione che mi permette di cliccare sull'avatar e 

    return (
        <Container >
            <h1 className='text-center mt-10' >Selec your Profile's</h1>

            <Row className='mt-5'>
                <Col>

                    <Nav.Link href="/Trend" element={<Trend />}>

                        <Avatar
                            alt="Remy Sharp"
                            src="https://cdn.80.lv/api/upload/content/db/images/6243c6e740361/widen_920x0.jpg"
                            sx={{ width: 250, height: 250 }}
                        />

                    </Nav.Link>

                </Col>
                <Col>
                    <Nav.Link href="/Trend" element={<Trend />}>

                        <Avatar
                            alt="Remy Sharp"
                            src="https://www.ommercato.com/wp-content/uploads/2021/11/who-is-ekko-in-league-of-legends-arcane-voice-actor-character-explanation.jpg"
                            sx={{ width: 250, height: 250 }}
                        />

                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/Trend" element={<Trend />}>

                        <Avatar
                            alt="Remy Sharp"
                            src="http://pm1.narvii.com/6096/f66cafb0e2fbe7aa3f6c7cede0895cf61a0fcc93_00.jpg"
                            sx={{ width: 250, height: 250 }}
                        />

                    </Nav.Link>
                </Col>
                <Col>
                    <Nav.Link href="/Trend" element={<Trend />}>

                        <Avatar
                            alt="Remy Sharp"
                            src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780603.jpg"
                            sx={{ width: 250, height: 250 }}
                        />

                    </Nav.Link>
                </Col>
            </Row>
        </Container>

    );
}


export default Profile;
