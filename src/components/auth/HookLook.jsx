import React, { useState, useEffect } from 'react';

import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

const HookLook = () => {
	const [ loggedIn, setLoggedIn ] = useState(false);
	const [ user, setUser ] = useState('');
	const [ token, setToken ] = useState('');
	const [ logout, setLogout ] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setLoggedIn(true);
		}
	}, []);

	const responseGoogle = (response) => {
		console.log(response);
		setLoggedIn(true);
		setUser(response.profileObj.name);
		setToken(response.tokenId);
		localStorage.setItem('token', response.tokenId);
	};

	const responseGoogleFailure = (response) => {
		console.log(response);
	};

	const logoutGoogle = () => {
		setLoggedIn(false);
		setUser('');
		setToken('');
		localStorage.removeItem('token');
		console.log('logout');
	};

	const MyRedButton = styled(Button)({
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
		margin: 8
	});

	const MyBlueButton = styled(Button)({
		background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
		margin: 8
	});

	return (
		<div>
			{loggedIn ? (
				<div>
					<MyBlueButton onClick={logoutGoogle}>
						<GoogleLogout
							clientId="1045586817098-qjvqjvqjvqjvqjvqjvqjvqjvqjvqjvqj.apps.googleusercontent.com"
							buttonText="Logout"
							onLogoutSuccess={logoutGoogle}
						/>
					</MyBlueButton>
				</div>
			) : (
				<div>
					<MyRedButton onClick={() => setLogout(true)}>
						<GoogleLogin
							clientId="1045586817098-qjvqjvqjvqjvqjvqjvqjvqjvqjvqjvqj.apps.googleusercontent.com"
							buttonText="Login"
							onSuccess={responseGoogle}
							onFailure={responseGoogleFailure}
							cookiePolicy={'single_host_origin'}
						/>
					</MyRedButton>
				</div>
			)}
		</div>
	);
};

export default HookLook;
