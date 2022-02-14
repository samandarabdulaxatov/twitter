import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider as AuthenProvider } from './Context/Authentication.jsx';
import { Provider as LanguageProvider } from './Context/Language.jsx';
import { Provider as ThemeProvider } from './Context/Theme.jsx';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<AuthenProvider>
				<LanguageProvider>
					<ThemeProvider>
						<App />
					</ThemeProvider>
				</LanguageProvider>
			</AuthenProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);
