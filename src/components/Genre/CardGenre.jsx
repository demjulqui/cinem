import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col } from 'react-bootstrap';

const AzionGenre = () => {
	const [ movies, setMovies ] = useState([]);
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=azione `).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	return (
		<Container>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id} xs={12} md={6} lg={4}>
						<Card>
							<Card.Img
								variant="top"
								src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
								alt={movie.name}
							/>
							<Card.Body>
								<Card.Text>{movie.overview}</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default AzionGenre;
