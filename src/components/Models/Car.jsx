import './Car.css';
import React, { useState, useEffect } from 'react';
import { Card, Image, Col, Row, Container, Button } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Modal } from 'react-bootstrap';
export default function RecipeReviewCard(props) {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [ film, setFilm ] = useState([]);

	return (
		<div>
			<Card style={{ width: '18rem' }} key={props.id} onClick={() => handleShow(props)} />
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500${props.image}`}
				className="img-fluid"
				onClick={handleShow}
			/>
			<Card />
			<Modal show={show} onHide={handleClose}>
				<Modal.Header>
					<Modal.Title>{props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body> {props.overview ? props.overview : 'non ce drescrizione'} </Modal.Body>
			</Modal>
		</div>
	);
}
