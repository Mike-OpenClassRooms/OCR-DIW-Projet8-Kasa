// src/components/Host/Host.jsx

import './Host.scss'; // Importation du fichier de styles SCSS spécifique à ce composant

// Définition du composant fonctionnel Host
// Ce composant reçoit un objet `host` en tant que prop
const Host = ({ host }) => {
  return (
    // Le composant retourne une div avec la classe CSS `host`
    <div className="host">
      {/* Affichage du nom de l'hôte dans un span avec la classe CSS `host-name` */}
      <span className="host-name">{host.name}</span>
      {/* Affichage de l'image de l'hôte avec l'attribut alt pour l'accessibilité */}
      <img src={host.picture} alt={host.name} className="host-picture" />
    </div>
  );
};

// Exportation du composant Host pour pouvoir l'utiliser dans d'autres fichiers
export default Host;
