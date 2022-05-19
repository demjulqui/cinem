import React from 'react';
// import {checkBudgetInfo} from '../utilities/dataCleaning'
import './MovieDetails.css';
import ReactPlayer from 'react-player/youtube';

const MovieDetails = (props) => {
	const movie = props.movie;
	const movieId = props.movieId;

	function onLoad() {
		window.scrollTo(0, 0);

		const id = props.match.params.movie_id;
		if (+id !== movieId) {
			props.onMovieClick(movie);
		}
	}

	function getVideo(type) {
		const matchedVideo = movie.videos.results.find((video) => video.type === type);
		return `https://www.${matchedVideo.site.toLowerCase()}.com/watch?v=${matchedVideo.key}`;
	}

	const getReleaseYear = () => {
		return movie.release_date.substring(0, 4);
	};

	const getRatingColor = () => {
		if (movie.vote_average > 7) {
			return { color: '#0ff900' };
		} else if (movie.vote_average > 4) {
			return { color: '#ff5c5c' };
		} else {
			return { color: '#f9e600' };
		}
	};

	const Popularity = () => {
		const popularity = movie.popularity;
		const popularityPercentage = popularity / 100 * 100;
		return popularityPercentage.toFixed(0);
	};

	const ratingPercent = () => {
		const rating = movie.vote_average;
		const ratingPercentage = rating / 10 * 100;
		return ratingPercentage.toFixed(0);
	};

	const loadingScreen = (
		<div style={{ width: '100vh', height: '100vw', display: 'flex' }}>
			<h1 style={{ fontSize: '20em', color: 'white' }}>LOADING</h1>
		</div>
	);

	onLoad();

	return (
		<React.Fragment>
			{loadingScreen}
			<div className="movie-details">
				<div className="movie-details-header">
					<div className="movie-details-header-left">
						<div className="movie-details-header-left-title">
							<h1>{movie.title}</h1>
							<h2>{getReleaseYear()}</h2>
						</div>
						<div className="movie-details-header-left-rating">
							<h2>{movie.vote_average}</h2>
							<h3>{ratingPercent()}%</h3>
						</div>
					</div>
					<div className="movie-details-header-right">
						<div className="movie-details-header-right-budget">
							<h2>${movie.budget}</h2>
							<h3>Budget</h3>
						</div>
						<div className="movie-details-header-right-revenue">
							<h2>${movie.revenue}</h2>
							<h3>Revenue</h3>
						</div>
					</div>
				</div>
				<div className="movie-details-body">
					<div className="movie-details-body-left">
						<div className="movie-details-body-left-poster">
							<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
						</div>
						<div className="movie-details-body-left-overview">
							<h2>Overview</h2>
							<p>{movie.overview}</p>
						</div>
					</div>
					<div className="movie-details-body-right">
						<div className="movie-details-body-right-trailer">
							<ReactPlayer
								url={getVideo('Trailer')}
								width="100%"
								height="100%"
								controls={true}
								playing={true}
								loop={true}
								muted={true}
								config={{
									youtube: {
										playerVars: {
											autoplay: 1,
											modestbranding: 1,
											showinfo: 0,
											controls: 0,
											rel: 0,
											disablekb: 1,
											fs: 0,
											cc_load_policy: 0,
											iv_load_policy: 3,
											autohide: 1,
											showsearch: 0,
											modestbranding: 1,
											playsinline: 1,
											origin: 'https://www.youtube.com'
										}
									}
								}}
							/>
						</div>
						<div className="movie-details-body-right-budget">
							<h2>${movie.budget}</h2>
							<h3>Budget</h3>
						</div>
						<div className="movie-details-body-right-revenue">
							<h2>${movie.revenue}</h2>
							<h3>Revenue</h3>
						</div>
						<div className="movie-details-body-right-profit">
							<h2>${movie.revenue - movie.budget}</h2>
							<h3>Profit</h3>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default MovieDetails;
