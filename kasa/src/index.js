// src/index.jsx

// Importation des bibliothèques React et ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importation des styles principaux en SCSS
import './styles/main.scss';

// Importation du composant principal de l'application
import App from './App';

// Importation du module de mesure des performances
import reportWebVitals from './reportWebVitals';

// Création de la racine de l'application React dans l'élément HTML avec l'id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu du composant principal de l'application (App) dans le mode strict de React
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Ajout d'un gestionnaire global pour les promesses non gérées
window.addEventListener('unhandledrejection', (event) => {
  // Affiche une erreur dans la console avec la raison du rejet de la promesse
  console.error(
    'Rejet de promesse non géré :',
    event.reason || 'Aucune raison fournie',
  );
  // Affiche des détails supplémentaires sur la promesse rejetée
  console.log('Détails de la promesse :', event.promise);
});

// Fonction pour mesurer les performances de l'application
// Pour commencer à mesurer les performances dans votre application, passez une fonction
// pour enregistrer les résultats (par exemple : reportWebVitals(console.log))
// ou envoyez-les à un point de terminaison analytique. En savoir plus : https://bit.ly/CRA-vitals
reportWebVitals();
