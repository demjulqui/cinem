import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=""
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';

import { Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ModalProva = (props) => {
	const [ show, setShow ] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<Card.Img
				onClick={handleShow}
				fluid
				variant="top"
				src={`https://image.tmdb.org/t/p/w500${props.backdrop_path}`}
				className="img-fluid"
			/>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{props.Title}</Modal.Title>
				</Modal.Header>
				<Modal.Body> {props.overview} </Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default ModalProva;
