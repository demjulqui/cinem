import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=""
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';

import { Card, Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const ModalProva = (props) => {
	const [ show, setShow ] = useState(false);
	const handleClose = () => setShow(false);
	const [ content, setContent ] = useState({});
	const handleShow = (item) => {
		setShow(true);
		setContent(item);
	};

	const [ movies, setMovies ] = useState([]);
	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=azione`).then((res) => {
			setMovies(res.data);
			console.log(movies);
		});
	}, []);

	return (
		<div>
			{movies.map((item) => (
				<Card style={{ width: '18rem' }} onClick={() => handleShow(item)}>
					<Card.Img variant="top" src={'http://image.tmdb.org/t/p/w185/' + item.poster_path} />
					<Card.Body>
						<Card.Title>{item.title}</Card.Title>
						<Card.Text>{item.overview}</Card.Text>
					</Card.Body>
				</Card>
			))}
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{content.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body> {content.overview} </Modal.Body>
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
