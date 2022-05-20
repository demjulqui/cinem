//http://127.0.0.1:2000/api/search/multi?query=batman
// `https://image.tmdb.org/t/p/w500/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Trend from '../../Pages/Trend';
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
import { Nav } from 'react-bootstrap';

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

	const handleChange = (e) => {
		setCerca(e.target.value);
	};

	return (
		<div>
			<Row>
				<Col>
					<FormControl type="text" placeholder="Cerca" value={cerca} onChange={handleChange} />
				</Col>
				<Col>
					<Button onClick={searchElement}>Cerca</Button>
					<Nav.Link href="/Trend" />
				</Col>
			</Row>
			<ListGroup>
				{cercaResult.map((element) => (
					<ListGroupItem key={element.id}>
						<Figure>
							<Row>
								<Col>
									<Figure.Image
										width={171}
										height={100}
										alt="171x100"
										src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
									/>
								</Col>
								<Col>
									<h3>{element.title}</h3>
									<p>{element.overview}</p>
								</Col>
							</Row>
						</Figure>
					</ListGroupItem>
				))}
			</ListGroup>
		</div>
	);
};

export default CercaBox;
