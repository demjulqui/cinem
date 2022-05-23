import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import axios from 'axios';
import '../images/scrittablu.png';

const LoginPage = () => {
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
			<Card  bg="transparent" className='border-0' style={{ width: '20rem' }}>
				<Card.Img
					variant="top"
					src="https://cdn.discordapp.com/attachments/973882360368074804/977139742195974164/solobordoblu.png"
				/>
				<Card.Body  className='rounded bg-light'>
					<Form>
						<div className="Form-group">
							<label htmlFor="exampleInputEmail1" className="profileCard mt-3">Email address</label><br />
							<input
								type="email"
								className="Form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
						</div>
						<div className="Form-group mt-3">
							<label htmlFor="exampleInputPassword1 " className="profileCard mt-3">Password</label><br />
							<input
								type="password"
								className="Form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="Form-group Form-check">
							<input type="checkbox" className="Form-check-input" id="exampleCheck1" />
							<label className="Form-check-label profileCard mt-3" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div>
						<Nav.Link href="/Profile">
							<Button className="mt-3" variant="primary">Login</Button>
						</Nav.Link>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default LoginPage;
