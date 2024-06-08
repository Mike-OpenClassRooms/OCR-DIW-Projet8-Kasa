// src/pages/HousingPage.jsx

import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';

function HousingPage() {
  // Récupérer l'ID du logement depuis les paramètres d'URL
  const { id } = useParams();

  // Trouver le logement correspondant dans les données
  const logement = logements.find((logement) => logement.id === id);

  // Afficher les informations du logement
  return (
    <div>
      {logement ? (
        <>
          <h1>{logement.title}</h1>
          <img src={logement.cover} alt={logement.title} />
          <p>{logement.description}</p>
          {/* Ajouter d'autres détails nécessaires */}
        </>
      ) : (
        <p>Logement non trouvé</p>
      )}
    </div>
  );
}

export default HousingPage;
