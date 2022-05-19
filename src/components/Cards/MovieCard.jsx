import React from 'react';
import './MovieCard.css';
import { Link } from 'react-router-dom';

const MovieCard = (props) => {
	const movie = props.movie;

	//faccio una funzione che mi restituisce il trailer
	const getTrailer = () => {
		return movie.videos.results.map((video) => {
			if (video.type === 'Trailer') {
				return video.key;
			}
		});
	};

	return (
		<div className="col-sm-3">
			<div
				style={{ flex: '13rem', cursor: 'pointer', border: 'none' }}
				className="card card-template mt-3"
				//per ogni card che premo clik sulla poster, mi viene passato il movie
				onClick={() => props.onMovieClick(movie)}
			>
				<img
					className="card-img-top"
					src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
					alt={movie.name}
				/>
				<div className="card-body text-dark">
					<h5 className="card-title">{movie.name}</h5>
					<p className="card-text">
						<small className="text-muted">Release Date {movie.release_date}</small>
						<small className="text-muted">User Rating {(movie.vote_average * 10).toFixed(0)}%</small>
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
