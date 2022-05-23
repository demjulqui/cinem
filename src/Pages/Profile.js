import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Trend from './Trend';
import "./profile.css";



const Profile = () => {



    return (
        <>
            <div className='ChooseBackground'>
                
                <Container>  
                <h1 className='text-center profileTitolo' >Select your Profile's</h1>
                <Row className='mt-5'>
                    <Col className='mt-5'>

                        <Nav.Link href="/Trend" element={<Trend />}>

                            

                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.cronacheletterarie.com/wp-content/uploads/2022/01/Arcane.jpg"
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />

                        </Nav.Link>

                    </Col>
                    <Col className='mt-5'>
                        <Nav.Link href="/Trend" element={<Trend />}>

                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.ommercato.com/wp-content/uploads/2021/11/who-is-ekko-in-league-of-legends-arcane-voice-actor-character-explanation.jpg"
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />

                        </Nav.Link>
                    </Col>
                    <Col className='mt-5'>
                        <Nav.Link href="/Trend" element={<Trend />}>

                            <Avatar
                                alt="Remy Sharp"
                                src="http://pm1.narvii.com/6096/f66cafb0e2fbe7aa3f6c7cede0895cf61a0fcc93_00.jpg"
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />

                        </Nav.Link>
                    </Col>
                    
                    <Col className='mt-5'>
                        <Nav.Link href="/Trend" element={<Trend />}>

                            <Avatar
                                alt="Remy Sharp"
                                src="https://www.ommercato.com/wp-content/uploads/2021/11/who-is-ekko-in-league-of-legends-arcane-voice-actor-character-explanation.jpg"
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />

                        </Nav.Link>
                    </Col>
                </Row>
                <Row className='mt-5'>
                <Col></Col>
                        <Col>
                            <Nav.Link href="/Trend" element={<Trend />}>

                            <Avatar
                                alt="Remy Sharp"
                                src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780603.jpg"
                                sx={{ width: 150, height: 150 }}
                                className="click"
                            />

                            </Nav.Link>
                        </Col>
                        <Col>
                            <Nav.Link href="/Trend" element={<Trend />}>

                            <Avatar
                                alt="Remy Sharp"
                                src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-remove-user-icon-png-image_780406.jpg"
                                sx={{ width: 150, height: 150 }}
                                className="click"
                            />

                            </Nav.Link>
                        </Col>
                        <Col></Col>
                </Row>
                </Container>
            </div>
        </>
    );
}


export default Profile;
