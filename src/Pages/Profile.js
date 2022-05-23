import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Trend from './Trend';
import "./profile.css";



const Profile = () => {

    const [profiles, setProfile] = useState([
        {

            name: "batman",
            img: "https://www.cronacheletterarie.com/wp-content/uploads/2022/01/Arcane.jpg"
        },
        {
            name: "batman2",
            img: "https://www.ommercato.com/wp-content/uploads/2021/11/who-is-ekko-in-league-of-legends-arcane-voice-actor-character-explanation.jpg"
        },

    ])

    const avatars = [
        "https://cdn.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.webp",
        "https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png",
        "https://png.pngtree.com/png-vector/20190629/ourlarge/pngtree-business-people-avatar-icon-user-profile-free-vector-png-image_1527664.jpg",
    ]
    const [newUser, setNewUser] = useState({
        name: "",
        img: "",
    })

    const chooseImg = (img) => {
        setNewUser(user => ({
            //utilizzo un rest operator
            ...user, img
        }))
    }
    const handleChange = (e) => {
        setNewUser(user => ({
            //utilizzo un rest operator
            ...user, name: e.target.value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setProfile(profiles => [...profiles, newUser])
    }



    return (
        <>
            <div className='ChooseBackground'>
<<<<<<< HEAD
                <Container>
                    <h1 className='text-center profileTitolo' >Select your Profile's</h1>
                    <Row className='my-5'>

                        {profiles.map(profile =>
                            <Col className='mt-5 d-flex justify-content-center'>
                                <Nav.Link href="/Trend" element={<Trend />}>
                                    <Avatar
                                        alt={profile.name + " avatar"}
                                        src={profile.img}
                                        sx={{ width: 225, height: 225 }}
                                        className="click"
                                    />
                                </Nav.Link>
                            </Col>
                        )}
=======
                
                <Container>  
                <h1 className='text-center profileTitolo' >Select your Profile's</h1>
                <Row className='mt-5'>
                    <Col className='mt-5'>

                        <Nav.Link href="/Trend" element={<Trend />}>

                            
>>>>>>> 26ba73cc0b6e2fe6033298b48d673c7e655ef5dc

                    </Row>
                    <Row>
                        <Col className='mt-5 d-flex justify-content-center'>
                            <Avatar
<<<<<<< HEAD
                                alt="new Avatar img"
                                src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780603.jpg"
=======
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
>>>>>>> 26ba73cc0b6e2fe6033298b48d673c7e655ef5dc
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />
                        </Col>
                    </Row>
                    <form onSubmit={handleSubmit}>

<<<<<<< HEAD
                        <Row>
                            {avatars.map(avatar =>
                                <Col className='mt-5 d-flex justify-content-center'>

                                    <Avatar
                                        onClick={() => chooseImg(avatar)}
                                        alt="Avatar"
                                        src={avatar}
                                        sx={{ width: 150, height: 150 }}
                                        className="click"
                                    />
                                </Col>
                            )}
                        </Row>
                        <Row>
                            <Col>

                                <input
                                    type="text"
                                    value={newUser.name}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col>
                                <Button type="submit">
                                    aggiunge Uttente
                                </Button>
                            </Col>
                        </Row>
                    </form>
=======
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
>>>>>>> 26ba73cc0b6e2fe6033298b48d673c7e655ef5dc
                </Container>
            </div>
        </>
    );
}


export default Profile;
