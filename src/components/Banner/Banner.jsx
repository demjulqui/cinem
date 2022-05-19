import React, { useState, useEffect } from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Banner = () => {
	//prendo i film da un API e li metto in un array per vederli in un carousel
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/popular`).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	return (
		<Carousel>
			{movies.map((movie) => (
				<Carousel.Item key={movie.id}>
					<div className="banner-wrapper">
						<img
							className="d-block w-100 img-fluid kenburns-bottom-left"
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={movie.name}
						/>
					</div>

					<Carousel.Caption>
						<h3>{movie.name}</h3>
						<p>{movie.overview}</p>
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner;
