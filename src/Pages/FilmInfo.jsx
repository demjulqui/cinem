import React, { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { PropaneOutlined } from '@mui/icons-material';
import { Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
//faccio un modal che mi mostra i dettagli del film per il quale ho cliccato
const ModalFilm = (props) => {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			{props.backdrop_path ? (
				<div>
					<Modal className="" show={show} onHide={handleClose} backdrop="static" keyboard={false}>
						<Modal.Header closeButton>
							<Modal.Title className="text-dark">{props.Title}</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Container>
								<Row>
									<Col>
										<Card.Img
											fluid
											variant="top"
											src={`https://image.tmdb.org/t/p/w500${props.backdrop_path}`}
											className="img-fluid"
										/>
									</Col>

									<Col>
										<Card.Body>
											<Card.Text className="text-dark">
												<p className="text-dark">data rilascio : {props.release_date}</p>
												{props.overview}
											</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Container>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="dark" onClick={handleClose} className="btn btn-dark text-dark fs-4">
								Close
							</Button>
						</Modal.Footer>
					</Modal>
					<div className="square mb-5 ms-5 ps-5">
						<Card.Img fluid variant="top" src={props.poster_path} className="img-fluid" />
						<Card.Text className="text">
							<Button variant="info" className="text-white" size="small" onClick={handleShow}>
								dettagli
							</Button>
							<span className="d-flex justify-content-start">
								<Button aria-label="delete" size="small">
									<PropaneOutlined />
								</Button>
								<Button aria-label="delete" size="small">
									<PropaneOutlined />
								</Button>
								<Button aria-label="delete" size="small">
									<PropaneOutlined />
								</Button>
								<Button aria-label="delete" size="small">
									<PropaneOutlined />
								</Button>
							</span>

							<div>
								{props.Title} <br />
								{props.release_date} <br />
							</div>
						</Card.Text>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ModalFilm;
