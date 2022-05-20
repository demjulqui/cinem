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
			<div style={{ flex: '13rem', cursor: 'pointer', border: 'none' }} className="card card-template mt-3">
				<img
					className="card-img-top hover"
					src={`https://image.tmdb.org/t/p/w500/${props.image}`}
					alt={`${props.title}`}
				/>

				<div className="card-body text-dark h5">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">
						<small className="text-muted">Release Date {props.release_date}</small>
					</p>

					<p>
						<small className="text-muted">
							{props.vote_average ? 'user rating' + props.vote_average : ''}
						</small>
					</p>
				</div>
			</div>
		</div>
	);
}
