import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import RecipeReviewCard from '../Models/Car';
import MovieDetails from '../MovieInfo/MovieDetails';

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
				<Col>
					<h1>Azione</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<MovieDetails movies={movies} id={id} />
				</Col>
			</Row>
		</Container>
	);
};

export default AzionGenre;
