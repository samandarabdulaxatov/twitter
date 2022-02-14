import React from 'react'
import './App.scss'

import AuthenticatedApp from './AuthenticatedApp.jsx'
import UnauthenticatedApp from './UnauthenticatedApp.jsx'

import useToken from './Hooks/useToken.js'

function App() {
	const [token] = useToken()

	if (token) {
		return <AuthenticatedApp />
	} else {
		return <UnauthenticatedApp />
	}
}

export default App
