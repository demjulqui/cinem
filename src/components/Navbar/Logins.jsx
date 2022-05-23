import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Trend from '../../Pages/Trend';
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
			<Card style={{ width: '18rem' }}>
				<Card.Img
					variant="top"
					src="https://cdn.discordapp.com/attachments/973882360368074804/977139741927542784/scrittablu.png"
				/>
				<Card.Body>
					<Form>
						<div className="Form-group">
							<label htmlFor="exampleInputEmail1">Email address</label>
							<input
								type="email"
								className="Form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
							/>
							<small id="emailHelp" className="Form-text text-muted">
								<hr />
								Inserisci la Tua Mail.
							</small>
						</div>
						<div className="Form-group">
							<label htmlFor="exampleInputPassword1">Password</label>
							<input
								type="password"
								className="Form-control"
								id="exampleInputPassword1"
								placeholder="Password"
							/>
						</div>
						<div className="Form-group Form-check">
							<input type="checkbox" className="Form-check-input" id="exampleCheck1" />
							<label className="Form-check-label" htmlFor="exampleCheck1">
								Check me out
							</label>
						</div>
						<Nav.Link href="/Profile">
							<Button variant="primary">Login</Button>
						</Nav.Link>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default LoginPage;
