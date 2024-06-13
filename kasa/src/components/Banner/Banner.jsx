// Ce composant gère la bannière affichée sur la page d’accueil et la page À Propos.

// Importation du fichier de styles SCSS pour styliser le composant Banner
import './Banner.scss';

// Déclaration d'un composant fonctionnel nommé Banner
// Ce composant prend trois props : title, imageUrl, et overlayOpacity
const Banner = ({ title, imageUrl, overlayOpacity = 0.6 }) => {
  return (
    // Div principale de la bannière avec une image de fond définie par la prop imageUrl
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Calque semi-transparent pour créer un effet de superposition */}
      <div
        className="overlay"
        // Le calque a une couleur de fond noire avec une opacité définie par la prop overlayOpacity
        style={{ backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})` }}
      ></div>
      {/* Affichage du titre de la bannière si la prop title est définie */}
      {title && <h1 className="banner-title">{title}</h1>}
    </div>
  );
};

// Exportation du composant Banner pour pouvoir l'utiliser dans d'autres parties de l'application
export default Banner;
