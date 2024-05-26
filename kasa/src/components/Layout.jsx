// Importation de 'Link' depuis 'react-router-dom' pour gérer les liens de navigation
import { Link } from 'react-router-dom';

// Importation du fichier SCSS pour styliser le composant Layout
import './Layout.scss';

// Importation du logo
import logo from '../assets/images/logo-kasa.svg';
import logoFooter from '../assets/images/logo-kasa-white.svg';

// Définition du composant fonctionnel Layout qui accepte des props, ici notamment 'children'
function Layout({ children }) {
  // Fonction pour gérer les clics sur les liens de navigation
  const handleNavClick = (label) => {
    console.log(`Clique sur ${label}`);
  };

  return (
    // La div principale qui englobe l'ensemble du layout
    <div>
      {/* En-tête du layout */}
      <header>
        {/* Logo et navigation */}
        <div className="header-content">
          {/* Logo */}
          <img src={logo} alt="Kasa logo" className="logo" />
          {/* Barre de navigation */}
          <nav>
            {/* Liste des éléments de navigation */}
            <ul>
              {/* Élément de navigation vers la page d'accueil */}
              <li><Link to="/" onClick={() => handleNavClick('Accueil')}>Accueil</Link></li>
              {/* Élément de navigation vers la page 'À propos' */}
              <li><Link to="/about" onClick={() => handleNavClick('À propos')}>À propos</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Section principale qui affichera les enfants passés au composant Layout */}
      <main>{children}</main>
      {/* Footer du layout */}
      <footer>
        {/* Logo de Kasa */}
        <img src={logoFooter} alt="Kasa logo footer" className="logo-footer" />
        {/* Copyright du footer */}
        <p>© 2024 Kasa. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

// Exportation du composant Layout pour pouvoir l'utiliser dans d'autres parties de l'application
export default Layout;