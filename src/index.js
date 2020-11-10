import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.post('https://search.torre.co/opportunities/_search/?offset=0&size=10&q=skill%2Frole%3Afrontend')
  .then((response) => {
    console.log(response);
    
  });

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
