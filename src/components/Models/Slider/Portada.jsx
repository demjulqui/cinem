import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sliderSettings from './SliderSett';
import Slider from 'react-slick';
import { Image, Container } from 'react-bootstrap';
import '../Car.css';
const Portada = () => {
	const [ id, setId ] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			await axios.get('http://127.0.0.1:2000/api/trending/week ').then((res) => {
				setId(res.data.results);
			});
		};
		fetchData();
	}, []);

	return (
		<div>
			<Slider {...sliderSettings}>
				{id.map((item) => (
					<div key={item.id}>
						<Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Portada;
