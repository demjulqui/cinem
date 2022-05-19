//http://127.0.0.1:2000/api/tv/popular

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieDetails from './MovieDetails';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';

const TVInfo = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		axios.get(`//http://127.0.0.1:2000/api/tv/popular?`).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	return (
		<Container>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id}>
						<MovieDetails movie={movie} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default TVInfo;
