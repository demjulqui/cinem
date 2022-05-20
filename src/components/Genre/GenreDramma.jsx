import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=""
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';
import SliderComponent from '../Models/Sli';

const GenreDramma = () => {
	const [ movies, setMovies ] = useState([]);
	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=drama`).then((res) => {
			setMovies(res.data);
			console.log(movies);
		});
	}, []);

	return (
		<div>
			<h1 className='mt-4 contactTitolo'>Dramma</h1>
			<SliderComponent id={movies} />
		</div>
	);
};

export default GenreDramma;
