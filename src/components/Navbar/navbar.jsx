import Navbar from 'react-bootstrap/Navbar';
import React, { useState, useEffect } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Figure, Button, FormControl, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Layout from '../../Pages/Layout';
import Home from '../../Pages/Home';
import Trend from '../../Pages/Trend';
import Contact from '../../Pages/Contact';
import axios from 'axios';

const NavbarHome = () => {
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
			<Navbar bg="light" expand="lg">
				<Container fluid>
					<Navbar.Brand href="/Trend">Film'S</Navbar.Brand>
					<Navbar.Toggle aria-controls="navbarScroll" />
					<Navbar.Collapse id="navbarScroll">
						<Col>
							<Nav
								className="me-auto my-2 my-lg-0"
								style={{ maxHeight: '100px' }}
								activeKey="/home"
								element={<Layout />}
							>
								<Nav.Link href="/" index element={<Home />} />
								<Nav.Link href="/Trend" element={<Trend />}>
									Trend
								</Nav.Link>

								<Nav.Link href="/Contact" element={<Contact />}>
									Genre
								</Nav.Link>
							</Nav>
						</Col>
						<Col>
							<FormControl
								type="text"
								placeholder="Search"
								className="mr-sm-2"
								onChange={handleChange}
								onKeyPress={(e) => {
									if (e.key === 'Enter') {
										searchElement(e);
									}
								}}
							/>
							<Button variant="outline-success" onClick={searchElement}>
								Search
							</Button>
							<Nav.Link href="/Trend" />
						</Col>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Container fluid>
				<Row>
					<Col>
						<ListGroup>
							{cercaResult.map((element) => (
								<ListGroupItem key={element._id}>
									<Figure>
										<Row>
											<Col>
												<Figure.Image
													width={171}
													height={180}
													alt="171x180"
													src={`https://image.tmdb.org/t/p/w500/${element.poster_path}`}
												/>
											</Col>
											<Col>
												<Figure.Caption>
													<h3>{element.title}</h3>
													<p>{element.overview}</p>
												</Figure.Caption>
											</Col>
										</Row>
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

export default NavbarHome;
