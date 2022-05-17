import GoogleLogin from 'react-google-login';
//786066878087-jgnsj8gl3p61sljp3pbbuotj9iremar0.apps.googleusercontent.com
//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

const clientId = "786066878087-jgnsj8gl3p61sljp3pbbuotj9iremar0.apps.googleusercontent.com"
//const clientId = '187234833443-0drcrrgqpabei3mk3f4bjppvsp58j60i.apps.googleusercontent.com ';

function Login() {
	const onSuccess = (response) => {
		console.log('login success! Current user:', response.profileObj);
	};
	const onFailure = (response) => {
		console.log('login failed! Current user:', response);
	};

	return (
		<div id="signinButton">
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_origin'}
				isSignedIn={true}
			/>
		</div>
	);
}

export default Login;
