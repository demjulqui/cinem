//http://127.0.0.1:2000/api/tv/popular

import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

const TVWatch = () => {
	const [ movies, setMovies ] = useState([]);

	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/popular?`).then((res) => {
			setMovies(res.data.results);
		});
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		pauseOnFocus: true,
		arrows: false
	};

	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Slider {...settings}>
							{movies.map((movie) => (
								<Col key={movie.id}>
									<Image src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} fluid />
								</Col>
							))}
						</Slider>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default TVWatch;
