import './Car.css';
import React, { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Modal } from 'bootstrap';
export default function RecipeReviewCard(props) {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [ film, setFilm ] = useState([]);

	return (
		<div className="col-sm-3">
			<div style={{ flex: '13rem', cursor: 'pointer', border: 'none' }} className="card card-template mt-3">
				<MDBBtn onClick={handleShow}>
					<Image
						className="card-img-top hover"
						src={`https://image.tmdb.org/t/p/w500/${props.image}`}
						alt={`${props.title}`}
					/>
				</MDBBtn>
			</div>
		</div>
	);
}
