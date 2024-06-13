// src/components/Host/Collapse.jsx
// Ce composant gère les menus déroulants dans la page À Propos et les pages des logements.

import React, { useState } from 'react'; // Importation de React et du hook useState
import './Collapse.scss'; // Importation du fichier de style SCSS pour le composant

// Définition du composant Collapse qui accepte des props : title et children
const Collapse = ({ title, children }) => {
  // Déclaration d'un état local isOpen, initialisé à false, et la fonction setIsOpen pour le mettre à jour
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic sur l'en-tête du menu déroulant
  const handleToggle = () => {
    // Inversion de l'état isOpen à chaque clic
    setIsOpen(!isOpen);
  };

  // Retourne le JSX pour le rendu du composant Collapse
  return (
    <div className={isOpen ? 'full-collapse' : 'closed-collapse'}>
      {/* En-tête du menu déroulant cliquable */}
      <div className="opened-collapse" onClick={handleToggle}>
        {/* Titre passé en prop */}
        <h2>{title}</h2>
        {/* Icône de chevron qui tourne en fonction de l'état isOpen */}
        <i
          className={`fa-solid fa-chevron-up fa-2xl ${
            isOpen ? 'rotate-chevron' : ''
          }`}
        ></i>
      </div>
      {/* Contenu du menu déroulant, affiché ou caché selon l'état isOpen */}
      <div className={`collapse-content ${isOpen ? 'show-content' : ''}`}>
        {children} {/* Affichage des enfants passés en prop */}
      </div>
    </div>
  );
};

export default Collapse; // Exportation du composant pour utilisation dans d'autres parties de l'application
