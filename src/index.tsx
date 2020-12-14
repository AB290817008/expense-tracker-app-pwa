import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import swDev from './Services/serviceRegister';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

swDev();
