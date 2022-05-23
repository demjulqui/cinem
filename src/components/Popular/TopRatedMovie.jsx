// http://127.0.0.1:2000/api/top_rated/movie

import React, { useState, useEffect } from 'react';
import RecipeReviewCard from '../Models/Car';
import SliderComponent from '../Models/Sli';
import axios from 'axios';

const TopRatedMovie = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/top_rated/movie`).then((res) => {
			setId(res.data.results);
		});
	}, []);

	return (
		<div>
			<h2 className="trendTitolo">Top Rated</h2>

			<SliderComponent id={id} />
		</div>
	);
};

export default TopRatedMovie;
