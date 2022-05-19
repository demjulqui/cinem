import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';
import './Car.css';
import React, { useState, useEffect } from 'react';

import IconButton from '@mui/material/IconButton';

export default function RecipeReviewCard(props) {
	const [ expanded, setExpanded ] = React.useState(false);
	const [ cartItems, setCartItems ] = useState(0);
	const [ favItems, setFavItems ] = useState(0);
	const [ cart, setCart ] = useState([]);
	const [ fav, setFav ] = useState([]);

	return (
		<div className="col-sm-3">
			<div
				style={{ flex: '13rem', cursor: 'pointer', border: 'none' }}
				className="card card-template mt-3"
				onClick={() => props.getMovieDetails()}
			>
				<Link to={`/movies/${props.id}`}>
					<img
						className="card-img-top hover-img"
						src={`https://image.tmdb.org/t/p/w500/${props.image}`}
						alt={`${props.title}`}
					/>
				</Link>
				<div className="card-body text-dark">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						<small className="text-muted">Release Date {props.release_date}</small>
						<small className="text-muted">User Rating {(props.vote_average * 10).toFixed(0)}%</small>
					</p>
				</div>
			</div>
		</div>
	);
}
