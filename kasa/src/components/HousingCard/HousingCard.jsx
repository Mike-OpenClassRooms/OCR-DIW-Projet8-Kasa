// Ce composant gère les logements affichés sur la page d’accueil.

// On importe les styles spécifiques pour ce composant depuis le fichier 'HousingCard.scss'
import './HousingCard.scss';

// On importe les données des logements depuis un fichier JSON local
import logements from '../../data/logements.json';

// On définit un composant fonctionnel React appelé 'HousingCard'
const HousingCard = () => {
  return (
    // On retourne une section HTML avec la classe 'housing-display' pour contenir les cartes des logements
    <section className="housing-display">
      {/* On utilise la méthode map() pour itérer sur chaque élément de la liste de logements */}
      {logements.map((logement) => (
        // Pour chaque logement, on crée une div avec une clé unique basée sur l'ID du logement
        <div key={logement.id} className="housing-home">
          {/* On affiche l'image du logement avec la source provenant de la propriété 'cover' du logement */}
          <img
            src={logement.cover}
            alt={logement.title}
            className="housing-img-home"
          />
          {/* On affiche le titre du logement dans un élément h2 */}
          <h2 className="housing-title-home">{logement.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default HousingCard;
