//http://127.0.0.1:2000/api/tv/popular

import MovieCard from './MovieCard';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const TVWatch = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/popular?`).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	const onClick = (id) => {
		window.location.href = `/tv/${id}`;
	};

	return (
		<Container fluid>
			<Row>
				{movies.map((movie) => (
					<Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
						<MovieCard onClick={onClick} id={movie.id} movie={movie} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default TVWatch;
