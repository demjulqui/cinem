import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=azione
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap';
import CardForGenre from './NewCard';

const GenreAzione = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=azione`).then((res) => {
			setMovies(res.data.id ? res.data : []);
		});
	}, []);

	return (
		<Container>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id} xs={12} md={6} lg={4}>
						<CardForGenre
							id={movie.id}
							title={movie.name}
							image={movie.poster_path}
							overview={movie.overview}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default GenreAzione;
