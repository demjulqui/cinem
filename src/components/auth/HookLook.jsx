import Login from './login';
import { useState, useEffect } from 'react';
import Logout from './logout';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';

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

	return (
		<div>
			{loggedIn ? (
				<div>
					<h1>Welcome {user}</h1>
					<GoogleLogout
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="Logout"
						onLogoutSuccess={logoutGoogle}
						onFailure={responseGoogleFailure}
					/>
				</div>
			) : (
				<div>
					<h1>Login</h1>
					<GoogleLogin
						clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
						buttonText="Login"
						onSuccess={responseGoogle}
						onFailure={responseGoogleFailure}
						cookiePolicy={'single_host_origin'}
					/>
				</div>
			)}
		</div>
	);
};

export default HookLook;
