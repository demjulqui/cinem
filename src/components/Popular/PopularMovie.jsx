import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SliderComponent from '../Models/Sli';

const TrendingMovieWeek = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/trending/week`).then((res) => {
			setId(res.data.results);
		});
	}, []);

	return (
		<div>
			<h2 className='trendTitolo'>Trend Di Questa Settimana</h2>
			<SliderComponent id={id} type="movie" title="Trend Di Questa Settimana" />
		</div>
	);
};

export default TrendingMovieWeek;
