// Ce composant gère la bannière affichée sur la page d’accueil et la page À Propos.

// Importation du fichier de styles SCSS pour styliser le composant Banner
import './Banner.scss';

// Déclaration d'un composant fonctionnel nommé Banner
// Ce composant prend deux props : title et imageUrl
const Banner = ({ title, imageUrl }) => {
  return (
    // Div principale de la bannière avec une image de fond définie par la prop imageUrl
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Si la prop title est fournie, affiche un élément h1 avec la classe CSS banner-title */}
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

// Exportation du composant Banner pour pouvoir l'utiliser dans d'autres parties de l'application
export default Banner;