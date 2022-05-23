import React, { useState, useEffect } from 'react';
import { Modal } from 'bootstrap';
import { Container, Row, Col } from 'react-bootstrap';

//faccio un modal che mi mostra i dettagli del film per il quale ho cliccato
const ModalFilm = (props) => {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [ id ] = useState(props.id);

	return (
		<div>
			{props.id.map((item) => (
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>{item.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Container>
							<Row>
								<Col>
									<img
										src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
										alt={`${item.title}`}
									/>
								</Col>
								<Col>
									<p>{item.overview}</p>
								</Col>
							</Row>
						</Container>
					</Modal.Body>
				</Modal>
			))}
		</div>
	);
};

export default ModalFilm;
