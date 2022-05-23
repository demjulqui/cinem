import './Car.css';
import React, { useState, useEffect } from 'react';
import { Card, Image, Col, Row, Container } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Modal } from 'bootstrap';
export default function RecipeReviewCard(props) {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [ film, setFilm ] = useState([]);

	return (
		<div>
			<Card.Img
				variant="top"
				src={`https://image.tmdb.org/t/p/w500${props.image}`}
				className="img-fluid"
				onClick={handleShow}
			/>
		</div>
	);
}
