import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css'
import reportWebVitals from './reportWebVitals';
import './bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
