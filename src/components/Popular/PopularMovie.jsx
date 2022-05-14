import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Model from './ModelsCarousel';

//faccio una slider con i nomi del film

const PopularMovie = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/movie/popular`).then((res) => {
			setId(res.data.results);
		});
	}, []);

	return (
		<div>
			<h2>Popular Movies</h2>
			<Slider>
				{id.map((item) => (
					<Model
						key={item.id}
						title={item.title}
						overview={item.overview}
						img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
					/>
				))}
			</Slider>
		</div>
	);
};

export default PopularMovie;
