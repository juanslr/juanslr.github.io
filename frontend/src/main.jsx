import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom'; // 👈 importa HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>       {/* 👈 envuelve tu App aquí */}
      <App />
    </HashRouter>
  </React.StrictMode>
);
