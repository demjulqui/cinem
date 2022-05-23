import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './Car';
import ModalFilm from '../../Pages/FilmInfo';

import Slider from 'react-slick';
//aggiungo le props che mi servono per la slider
export default function SliderComponent(props) {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1000,
		autoplaySpeed: 1000,
		cssEase: 'linear'
	};
	return (
		<div>
			<Slider {...settings}>
				{props.id.map((item) => (
					<div>
						<RecipeReviewCard
							id={item.id}
							title={item.title}
							image={item.poster_path}
							overview={item.overview}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
}

// import React, { useState, useEffect } from 'react';
