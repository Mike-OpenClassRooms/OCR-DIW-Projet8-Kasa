// src/components/Tags/Tags.jsx

// Importation des bibliothèques nécessaires
import './Tags.scss'; // Importation du fichier de style SCSS pour le composant Tags

// Définition du composant fonctionnel Tags
// Ce composant prend en entrée une liste de tags et les affiche
const Tags = ({ tags }) => {
  return (
    // La div qui contiendra tous les tags
    <div className="tags">
      {/* Utilisation de la méthode map pour parcourir la liste des tags et créer un élément <span> pour chaque tag */}
      {tags.map((tag, index) => (
        // Chaque tag est enveloppé dans un élément <span> avec une clé unique basée sur l'index
        <span key={index} className="tag">
          {/* Affichage du contenu du tag */}
          {tag}
        </span>
      ))}
    </div>
  );
};

// Exportation du composant Tags pour pouvoir l'utiliser dans d'autres fichiers
export default Tags;
