import React from 'react';
import '../Styles/Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from '../Config/firebase';
import { actionTypes } from '../DataLayer/reducer';
import { useStateValue } from '../DataLayer/StateProvider';

function Login() {
	const [state, dispatch] = useStateValue();
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				dispatch({
					type: actionTypes.SET_USER,
					user: result.user,
				});
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login__logo">
				<img
					src="https://cdn.worldvectorlogo.com/logos/facebook-3-2.svg"
					alt=""
				/>
				<img
					src="https://cdn.worldvectorlogo.com/logos/facebook-1.svg"
					alt=""
				/>
				<h2>CLONE!</h2>
				<h3>by Johnplex</h3>
			</div>
			<Button type="submit" onClick={signIn}>
				Entrar
			</Button>
		</div>
	);
}

export default Login;
