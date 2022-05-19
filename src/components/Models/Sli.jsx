import React, { useState, useEffect } from 'react';
import RecipeReviewCard from './Car';

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
					<RecipeReviewCard
						key={item.id}
						title={item.title}
						image={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
						overview={item.overview}
						release_date={item.release_date}
						vote_average={item.vote_average}
					/>
				))}
			</Slider>
		</div>
	);
}
