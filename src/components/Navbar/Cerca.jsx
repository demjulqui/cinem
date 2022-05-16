//http://127.0.0.1:2000/api/search/multi?query=batman
// `https://image.tmdb.org/t/p/w500/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
	Card,
	Container,
	Row,
	Col,
	ListGroup,
	ListGroupItem,
	Figure,
	Button,
	FormControl,
	Form
} from 'react-bootstrap';
import MediaControlCard from '../Models/CardD';

//faccio una search da aggiungere in una navbar

const CercaBox = () => {
	const [ cerca, setCerca ] = useState('');
	const [ cercaResult, setCercaResult ] = useState([]);

	axios.defaults.baseURL = 'http://localhost:2000/';

	const searchElement = async (e) => {
		e.preventDefault();
		await axios
			.get(`api/search/multi`, {
				params: {
					query: cerca
				}
			})
			.then((results) => setCercaResult(results.data));
	};

	return (
		<div>
			<Form onSubmit={searchElement}>
				<FormControl type="text" placeholder="Search" onChange={(e) => setCerca(e.target.value)} />
				<Button type="submit">Search</Button>
			</Form>

			{cercaResult.map((element) => (
				<MediaControlCard
					title={element.title}
					poster={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
					overview={element.overview}
					id={element.id}
					type={element.media_type}
				/>
			))}
		</div>
	);
};

export default CercaBox;
