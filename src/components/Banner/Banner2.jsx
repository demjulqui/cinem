import React from 'react';
import './Banner.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { fakeMovieData } from './Fake';

const { movies } = fakeMovieData;

//faccio una map per ogni film e lo metto in un array

const film = movies.map((movie) => movie);

const Banner2 = () => {
	return (
		<Carousel>
			{film.map((movie) => (
				<Carousel.Item key={movie.id}>
					<div className="banner-wrapper">
						<img
							className="d-block w-100 img-fluid "
							src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
							alt={movie.name}
						/>
					</div>

					<Carousel.Caption>
						<h3>{movie.title}</h3>
						{(movie.average_rating.toFixed(1) / 10 * 100).toFixed()}
					</Carousel.Caption>
				</Carousel.Item>
			))}
		</Carousel>
	);
};

export default Banner2;
