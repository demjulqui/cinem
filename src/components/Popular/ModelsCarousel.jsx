import React, { useState, useEffect } from 'react';

import { Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';

//faccio una slider vuota per riempire con i dati del props
export default function Model(props) {
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
			<h2> Single Item</h2>
			<Slider {...settings}>
				<Row>
					<div>
						<Col>
							<h1>{props.title}</h1>
							<img src={props.img} alt={props.title} />
						</Col>
						<Col>
							<p>{props.overview}</p>
						</Col>
					</div>
				</Row>
			</Slider>
		</div>
	);
}
