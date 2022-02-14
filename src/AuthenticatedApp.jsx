import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

function AuthenticatedApp() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/profile/*' element={<Profile />} />
			</Routes>
		</>
	);
}

export default AuthenticatedApp;
