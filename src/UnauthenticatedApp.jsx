import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp.jsx';

function UnauthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/signup' element={<SignUp />} />
			</Routes>
		</>
	);
}

export default UnauthenticatedApp;
