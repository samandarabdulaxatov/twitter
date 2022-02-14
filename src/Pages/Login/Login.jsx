import React from 'react';
import './Login.scss';

import { NavLink } from 'react-router-dom';
import useToken from '../../Hooks/useToken.js';

import Logo from '../../Components/Logo/Logo.jsx';

function Login() {
	const [, setToken] = useToken();
	const elEmailInput = React.useRef();
	const elPasswordInput = React.useRef();

	function handleSubmit(evt) {
		evt.preventDefault();

		const { email, password } = evt.target.elements;

		if (email.value.length > 2 && password.value.length >= 4) {
			setToken({
				email: email.value,
				password: password.value,
			});
		}
	}

	return (
		<>
			<div className='login'>
				<div className='login__inner'>
					<Logo />
					<h2 className='login__heading'>Log in to Twitter</h2>
					<form className='login__form' onSubmit={handleSubmit}>
						<input
							ref={elEmailInput}
							className='login__from-input--email'
							type='text'
							placeholder='Phone number, email address'
							name='email'
						/>

						<input
							ref={elPasswordInput}
							className='login__from-input--address'
							type='password'
							placeholder='Password'
							name='password'
						/>

						<button
							className='login__from-button'
							onClick={() => {
								if (elEmailInput.current.value.length === 0) {
									elEmailInput.current.focus();
								} else {
									elPasswordInput.current.focus();
								}
							}}
							type='submit'>
							Log In
						</button>
					</form>

					<ul className='login-up__list'>
						<li className='login-up__item'>
							<NavLink className='login-up__link' to='/signup'>
								Forgot password?
							</NavLink>
						</li>
						<li className='login-up__item'>
							<NavLink className='login-up__link' to='/signup'>
								Sign up to Twitter
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Login;
