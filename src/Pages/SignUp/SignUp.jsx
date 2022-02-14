import React from 'react';
import './SignUp.scss';

import Logo from '../../Components/Logo/Logo.jsx';

function SignUp() {
	return (
		<>
			<div className='sign-up'>
				<div className='sign-up__inner'>
					<Logo />

					<h2 className='sign-up__heading'>Create an account</h2>

					<form className='sign-up__form'>
						<input
							className='sign-up__form-input--name'
							type='text'
							placeholder='Name'
						/>

						<input
							className='sign-up__form-input--name'
							type='text'
							placeholder='Phone number'
						/>

						<a className='sign-up__form-use--email' href='#link'>
							Use email
						</a>

						<h3 className='sign-up__form-heading'>Date of birth</h3>

						<p className='sign-up__form-description'>
							Facilisi sem pulvinar velit nunc, gravida
							scelerisque amet nibh sit. Quis bibendum ante
							phasellus metus, magna lacinia sed augue. Odio enim
							nascetur leo mauris vel eget. Pretium id ullamcorper
							blandit viverra dignissim eget tellus. Nibh mi massa
							in molestie a sit. Elit congue.
						</p>

						<div className='sign-up__form-selects'>
							<select className='sign-up__form-select'>
								<option value='month'>Month</option>
								<option value='yanvar'>Yanvar</option>
								<option value='fevral'>Fevral</option>
								<option value='mart'>Mart</option>
								<option value='aprel'>Aprel</option>
								<option value='may'>May</option>
								<option value='iyun'>Iyun</option>
								<option value='iyul'>Iyul</option>
								<option value='avgust'>Avgust</option>
								<option value='sentabr'>Sentabr</option>
								<option value='oktabr'>Oktabr</option>
								<option value='noyabr'>Noyabr</option>
								<option value='dekabr'>Dekabr</option>
							</select>

							<select className='sign-up__form-select'>
								<option value='day'>Day</option>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
							</select>

							<select className='sign-up__form-select'>
								<option value='year'>Year</option>
								<option value='2016'>2016</option>
								<option value='2017'>2017</option>
								<option value='2018'>2018</option>
								<option value='2019'>2019</option>
								<option value='2020'>2020</option>
								<option value='2021'>2021</option>
							</select>
						</div>

						<button className='sign-up__form-btn' type='submit'>
							Next
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignUp;
