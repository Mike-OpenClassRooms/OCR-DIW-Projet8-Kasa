// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Ajout d'un gestionnaire global pour les promesses non gérées
window.addEventListener('unhandledrejection', (event) => {
  console.error(
    'Rejet de promesse non géré :',
    event.reason || 'Aucune raison fournie',
  );
  console.log('Détails de la promesse :', event.promise);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
