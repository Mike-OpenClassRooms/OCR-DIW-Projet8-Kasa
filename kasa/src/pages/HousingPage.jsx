// src/pages/HousingPage.jsx

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/logements.json';
import Slideshow from '../components/Slideshow/Slideshow';
import Collapse from '../components/Collapse/Collapse';

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
    <div className="housing-sheet">
      <Slideshow images={logement.pictures} alt={logement.title} />

      <div className="housing-info">
        <div className="housing-details">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>

        <div className="host-ratings"></div>
      </div>

      <div className="housing-collapses">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default HousingPage;
