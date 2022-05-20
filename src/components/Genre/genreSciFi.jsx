import React, { useState, useEffect } from 'react';
//http://127.0.0.1:2000/api/tv/ricercaperGenere?page=1&genre=""
// http://127.0.0.1:2000/api/movie/genre ---> lista generi
import axios from 'axios';
import SliderComponent from '../Models/Sli';

const GenreSciFi = () => {
	const [ movies, setMovies ] = useState([]);
	useEffect(() => {
		axios.get(`http://127.0.0.1:2000/api/tv/ricercaperGenere?genre=sci-fi`).then((res) => {
			setMovies(res.data);
			console.log(movies);
		});
	}, []);

	return (
		<div>
			<h1>Sci-Fi</h1>
			<SliderComponent id={movies} />
		</div>
	);
};

export default GenreSciFi;