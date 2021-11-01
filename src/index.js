import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Example } from './router/route1'

ReactDOM.render(
	<React.StrictMode>
		<Example />
	</React.StrictMode>,
	document.getElementById('root')
);

