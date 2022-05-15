// http://127.0.0.1:2000/api/trending/week

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

//faccio una slider con i e le immagini del film

const TrendingMovie = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/movie/trending/week`).then((res) => {
			setId(res.data.results);
		});
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 2000,
		cssEase: 'linear'
	};

	return (
		<div>
			<h2>Trending Movies</h2>
			<Slider {...settings}>
				{id.map((item) => (
					<div key={item.id}>
						<h1>{item.title}</h1>
						<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default TrendingMovie;
