import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import { Container, Row, Col, Button, Nav, DropdownButton, Dropdown, Modal, FormGroup, Form, Card } from 'react-bootstrap';
import Trend from './Trend';
import "./profile.css";




const Profile = () => {

    const [show, setShow] = useState(false);
    const [profiles, setProfile] = useState([
        {

            name: "Paolo",
            img: "https://th.bing.com/th/id/OIP.4l745LKOzMIKiNgqGO6cLQHaHa?pid=ImgDet&rs=1"
        },
        {
            name: "Carlo",
            img: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        },

    ])

    const avatars = [
        "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/877ad1ce3a479ef9498e1efc_rw_600.png?h=794db6a6ae01c539fdfb7ad5e5a89589",
        "https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57",
        "https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/baffc96f5eccbde6402befe0_rw_600.png?h=cc45688ebccb59201761f059f3f4e5e3",
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
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
                    <h1 className='text-center profileTitolo' >Scegli il tuo profilo</h1>
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

                                    <h3 className='text-center mt-3 profileTitolo'>{profile.name}</h3>
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
                                src="https://corporate-podcast.com/wp-content/uploads/2020/03/MPC_CP_Icons_Umsetzung.png"
                                sx={{ width: 225, height: 225 }}
                                className="click target"
                               
                            />
                        </Col>
                    </Row>
                    <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="example-modal-sizes-title-lg" >
                        <form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="text" placeholder="Inserisci nome utente:" onChange={handleChange} />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <DropdownButton id="dropdown-basic-button" title="Elimina">
                                        {profiles.map(profile =>
                                            <Dropdown.Item onClick={() => handleDelete(profile.name)}>{profile.name}</Dropdown.Item>
                                        )}
                                    </DropdownButton>
                                </Col>
                                <Col>
                                    <Button variant="primary" onClick={addUser}>
                                        Aggiungi utente
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
