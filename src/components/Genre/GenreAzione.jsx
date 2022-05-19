import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=azione
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';

import { Card } from 'react-bootstrap';

const GenreAzione = () => {
	const [ movies, setMovies ] = useState([]);
	const [ conta, setConta ] = useState(0);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=azione`).then((res) => {
			setMovies(res.data);
			console.log(movies);
		});
	}, []);

	return (
		<Container>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id} xs={12} md={6} lg={4}>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
							<Card.Body>
								<Card.Title>{movie.title}</Card.Title>
								<Card.Text>{movie.overview}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default GenreAzione;
