import React, { useState, useEffect } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Trend from '../../Pages/Trend';

const LoginPage = () => {
	return (
		<div>
			<Card style={{ width: '18rem' }}>
				<Card.Header>
					<h3>Login</h3>
				</Card.Header>
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
						<Nav.Link href="/Trend">
							<Button variant="primary">Login</Button>
						</Nav.Link>
					</Form>
				</Card.Body>
			</Card>
		</div>
	);
};

export default LoginPage;
