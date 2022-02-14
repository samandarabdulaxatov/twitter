import React from 'react';

const Context = React.createContext();

function Provider({ children }) {
	const [state, setState] = React.useState(
		window.localStorage.getItem('lang') || 'uz',
	);

	React.useEffect(() => {
		window.localStorage.setItem('lang', state);
	}, [state]);

	return (
		<Context.Provider value={{ state, setState }}>
			{children}
		</Context.Provider>
	);
}

export { Context, Provider };
