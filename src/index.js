import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SA from './SA';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <SA/>
  </React.StrictMode>
);

