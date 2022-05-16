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

	return (
		<div>
			<Form inline>
				<FormControl
					type="text"
					placeholder="Cerca"
					className="mr-sm-2"
					onChange={(e) => setCerca(e.target.value)}
				/>
				<Button variant="outline-success">Cerca</Button>
			</Form>
			<Container>
				<Row>
					<Col>
						<ListGroup>
							{cercaResult.map((cerca) => (
								<ListGroupItem key={cerca.id}>
									<Figure>
										<Figure.Image
											width={171}
											height={180}
											alt="171x180"
											src={`https://image.tmdb.org/t/p/w500/${cerca.poster_path}`}
										/>
										<Figure.Caption>
											<h5>{cerca.title}</h5>
											<p>{cerca.overview}</p>
										</Figure.Caption>
									</Figure>
								</ListGroupItem>
							))}
						</ListGroup>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default CercaBox;
