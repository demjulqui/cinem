// http://127.0.0.1:2000/api/trending/day

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderComponent from '../Models/Sli';
import { IconButton, StyledBadge, ShoppingCartIcon } from '@mui/material';

const TrendingMovieDay = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/trending/day`).then((res) => {
			setId(res.data.results);
		});
	}, []);

	return (
		<div>
			<h2>Trend Di Oggi</h2>
			<SliderComponent id={id} />
		</div>
	);
};

export default TrendingMovieDay;
