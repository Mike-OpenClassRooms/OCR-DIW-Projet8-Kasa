// Ce composant gère les menus déroulants dans la page À Propos et les pages des logements.

import React, { useState } from 'react';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour gérer le clic
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'full-collapse' : 'closed-collapse'}>
      <div className="opened-collapse" onClick={handleToggle}>
        <h2>{title}</h2>
        <i
          className={`fa-solid fa-chevron-up fa-2xl ${
            isOpen ? 'rotate-chevron' : ''
          }`}
        ></i>
      </div>
      <div className={`collapse-content ${isOpen ? 'show-content' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
