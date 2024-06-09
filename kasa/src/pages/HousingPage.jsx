// src/pages/HousingPage.jsx

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow/Slideshow';

function HousingPage() {
  // Récupérer l'ID du logement depuis les paramètres d'URL
  const { id } = useParams();

  // Hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Trouver le logement correspondant dans les données
  const logement = logements.find((logement) => logement.id === id);

  // Utiliser useEffect pour rediriger si le logement n'est pas trouvé
  useEffect(() => {
    if (!logement) {
      navigate('/404');
    }
  }, [logement, navigate]);

  // Si le logement n'est pas trouvé, ne rien rendre (la redirection est gérée par useEffect)
  if (!logement) {
    return null;
  }

  // Afficher les informations du logement
  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <Slideshow images={logement.pictures} />
      <p>{logement.description}</p>
      {/* Ajout d'autres détails nécessaires */}
    </div>
  );
}

export default HousingPage;
