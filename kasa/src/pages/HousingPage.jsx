// src/pages/HousingPage.jsx

// Importer les hooks useParams et useNavigate depuis react-router-dom
import { useParams, useNavigate } from 'react-router-dom';
// Importer le hook useEffect depuis React
import { useEffect } from 'react';
// Importer les données de logements depuis un fichier JSON
import logements from '../data/logements.json';
// Importer les composants nécessaires
import Slideshow from '../components/Slideshow/Slideshow';
import Collapse from '../components/Collapse/Collapse';
import Tags from '../components/Tags/Tags';
import Host from '../components/Host/Host';
import Rating from '../components/Rating/Rating';

function HousingPage() {
  // Récupérer l'ID du logement depuis les paramètres d'URL
  const { id } = useParams();

  // Initialiser le hook de navigation pour rediriger l'utilisateur
  const navigate = useNavigate();

  // Trouver le logement correspondant dans les données en utilisant l'ID récupéré
  const logement = logements.find((logement) => logement.id === id);

  // Utiliser useEffect pour rediriger l'utilisateur si le logement n'est pas trouvé
  useEffect(() => {
    // Si le logement n'est pas trouvé, rediriger vers la page 404
    if (!logement) {
      navigate('/404');
    } else {
      // Mettre à jour le titre de la page
      document.title = `Kasa • ${logement.title}`;

      // Vérifier s'il y a déjà une balise canonique existante et la supprimer
      const existingCanonicalLink = document.querySelector(
        'link[rel="canonical"]',
      );
      if (existingCanonicalLink) {
        document.head.removeChild(existingCanonicalLink);
      }

      // Créer et ajouter une nouvelle balise canonique
      const canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = `https://kasa.city/housing/${logement.id}`;
      document.head.appendChild(canonicalLink);

      // Nettoyer la balise canonique lorsque le composant est démonté
      return () => {
        if (canonicalLink) {
          document.head.removeChild(canonicalLink);
        }
      };
    }
  }, [logement, navigate]); // Le tableau de dépendances contient logement et navigate pour exécuter l'effet lorsque l'un de ces éléments change

  // Si le logement n'est pas trouvé, retourner null (la redirection est gérée par useEffect)
  if (!logement) {
    return null;
  }

  // Rendre les informations du logement
  return (
    <div className="housing-sheet">
      {/* Afficher un diaporama des images du logement */}
      <Slideshow images={logement.pictures} alt={logement.title} />

      <div className="housing-info">
        <div className="housing-details">
          {/* Afficher le titre et l'emplacement du logement */}
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          {/* Afficher les tags associés au logement */}
          <Tags tags={logement.tags} />
        </div>

        <div className="host-ratings">
          {/* Afficher la note du logement */}
          <Rating rating={parseInt(logement.rating)} />
          {/* Afficher les informations de l'hôte */}
          <Host host={logement.host} />
        </div>
      </div>

      <div className="housing-collapses">
        {/* Afficher la description du logement dans un composant Collapse */}
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        {/* Afficher les équipements du logement dans un composant Collapse */}
        <Collapse title="Équipements">
          <ul>
            {/* Parcourir les équipements et les afficher dans une liste */}
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

// Exporter le composant HousingPage pour l'utiliser dans d'autres parties de l'application
export default HousingPage;
