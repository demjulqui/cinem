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
import { Link } from 'react-router-dom';

//faccio una search da aggiungere in una navbar

const CercaBox = () => {
	const [ cerca, setCerca ] = useState('');
	const [ cercaResult, setCercaResult ] = useState([]);

	//faccio ussefect su useState perchè voglio che la funzione sia eseguita solo quando il componente viene caricato
	useEffect(
		() => {
			const fetchData = async () => {
				const result = await axios(`//http://127.0.0.1:2000/api/search/multi?query=${cerca}`);
				setCercaResult(result.data.results);
			};
			fetchData();
		},
		[ cerca ]
	);
};
