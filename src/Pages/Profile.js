import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col, Button, Nav, DropdownButton, Dropdown, Modal, FormGroup, Form } from 'react-bootstrap';
import Trend from './Trend';
import "./profile.css";




const Profile = () => {

    const [show, setShow] = useState(false);
    const [profiles, setProfile] = useState([
        {

            name: "Paulo",
            img: "https://www.cronacheletterarie.com/wp-content/uploads/2022/01/Arcane.jpg"
        },
        {
            name: "Carlo",
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

    //faccio una funzione che mi per mette di nascondere una parte della pagina con un click


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
    //faccio una funzione per aggiungere un nuovo utente devi scrivere qualcosa nel campo di testo senno non aggiungi nulla
    const addUser = () => {
        if (newUser.name !== "") {
            setProfile(profiles => [...profiles, newUser])
            setNewUser({
                name: "",
                img: "",
            })
        }
    }

    //faccio una funzione che mi permette di eliminare un utente dall'array chiedendo all'utente il nome
    const handleDelete = (name) => {
        setProfile(profiles => profiles.filter(user => user.name !== name))
    }


    return (
        <>
            <div className='ChooseBackground'>
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

                                    <h3 className='text-center mt-3'>{profile.name}</h3>
                                </Nav.Link>
                            </Col>
                        )}

                    </Row>
                    <Row>
                        <Col className='mt-5 d-flex justify-content-center'>
                            <Avatar
                                //se non scrivo niente nell'input non aggiungo nulla
                                onClick={handleShow}

                                alt="new Avatar img"
                                src="https://png.pngtree.com/png-vector/20190307/ourlarge/pngtree-vector-add-user-icon-png-image_780603.jpg"
                                sx={{ width: 225, height: 225 }}
                                className="click"
                            />
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
                        <form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>nome user:{newUser.name}</Form.Label>
                                <Form.Control type="text" placeholder="Modificare" onChange={handleChange} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <DropdownButton id="dropdown-basic-button" title="Delete">
                                        {profiles.map(profile =>
                                            <Dropdown.Item onClick={() => handleDelete(profile.name)}>{profile.name}</Dropdown.Item>
                                        )}
                                    </DropdownButton>
                                </Col>
                                <Col>
                                    <Button variant="primary" onClick={addUser}>
                                        aggingere utente
                                    </Button>
                                </Col>

                            </Row>
                            <Row>
                                {avatars.map(avatar =>
                                    <Col className='mt-5 d-flex justify-content-center'>

                                        <Avatar
                                            //faccio un onclick per aggingere un utente all'array
                                            onClick={() => chooseImg(avatar)}

                                            alt="Avatar"
                                            src={avatar}
                                            sx={{ width: 150, height: 150 }}
                                            className="click"
                                        />
                                    </Col>
                                )}
                            </Row>

                        </form>
                    </Modal>


                </Container>
            </div>
        </>
    );
}


export default Profile;
