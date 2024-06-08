// src/pages/Error404Page.jsx

import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Error404Page() {
  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Utiliser useEffect pour configurer la redirection automatique après 5 secondes
  useEffect(() => {
    // Définir un timeout pour la redirection
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    // Nettoyer le timeout si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="error404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default Error404Page;
