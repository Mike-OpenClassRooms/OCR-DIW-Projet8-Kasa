// Importation de 'Link' depuis 'react-router-dom' pour gérer les liens de navigation
import { Link } from 'react-router-dom';

// Importation du fichier SCSS pour styliser le composant Layout
import './Layout.scss'; // Assurez-vous d'avoir configuré SASS

// Définition du composant fonctionnel Layout qui accepte des props, ici notamment 'children'
function Layout({ children }) {
  return (
    // La div principale qui englobe l'ensemble du layout
    <div>
      {/* En-tête du layout */}
      <header>
        {/* Barre de navigation */}
        <nav>
          {/* Liste des éléments de navigation */}
          <ul>
            {/* Élément de navigation vers la page d'accueil */}
            <li><Link to="/">Accueil</Link></li>
            {/* Élément de navigation vers la page 'À propos' */}
            <li><Link to="/about">À propos</Link></li>
          </ul>
        </nav>
      </header>
      {/* Section principale qui affichera les enfants passés au composant Layout */}
      <main>{children}</main>
      {/* Footer du layout */}
      <footer>
        {/* Texte du footer */}
        <p>© 2024 Kasa. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

// Exportation du composant Layout pour pouvoir l'utiliser dans d'autres parties de l'application
export default Layout;