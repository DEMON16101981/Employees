import ReactDOMClient from 'react-dom/client';
import './index.css';
import React from 'react';
import App from './components/app/app';

const container = document.getElementById('root');
 
const root = ReactDOMClient.createRoot(container);
 

root.render (<App/>);

<div img src="./maxresdefault.jpg"></div>