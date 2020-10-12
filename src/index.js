import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/create-store';
import App from './components/App';

const MOUNT = document.getElementById('root');

ReactDOM.render(<App store={store} />, MOUNT);