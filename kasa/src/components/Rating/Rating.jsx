// src/components/Rating/Rating.jsx

// Importation du fichier de style SCSS pour ce composant
import './Rating.scss';

// Déclaration du composant fonctionnel Rating qui accepte une prop 'rating'
const Rating = ({ rating }) => {
  // Définition de la note maximale
  const maxRating = 5;
  // Définition de l'icône d'une étoile pleine
  const fullStar = <i className="fa-solid fa-star full-star"></i>;
  // Définition de l'icône d'une étoile vide
  const emptyStar = <i className="fa-solid fa-star empty-star"></i>;

  // Retourne le JSX à rendre
  return (
    <div className="rating">
      {/* Création d'un tableau de longueur 'maxRating' et utilisation de map pour générer les étoiles */}
      {[...Array(maxRating)].map((_, index) => (
        // Chaque étoile est un élément 'span' avec une clé unique
        <span key={index}>
          {/* Affichage d'une étoile pleine ou vide selon l'index et la note actuelle */}
          {index < rating ? fullStar : emptyStar}
        </span>
      ))}
    </div>
  );
};

// Exportation du composant Rating pour pouvoir l'utiliser dans d'autres fichiers
export default Rating;
