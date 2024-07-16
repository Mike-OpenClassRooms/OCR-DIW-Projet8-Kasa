// Importation de 'Link' et 'useLocation' depuis 'react-router-dom' pour gérer les liens de navigation
import { Link, useLocation } from 'react-router-dom';

// Importation du fichier SCSS pour styliser le composant Layout
import './Layout.scss';

// Importation des logos
import logo from '../../assets/images/logo-kasa.svg';
import logoFooter from '../../assets/images/logo-kasa-white.svg';

// Définition du composant fonctionnel Layout qui accepte des props, ici notamment 'children'
function Layout({ children }) {
  // Utilisation du hook useLocation pour obtenir l'objet location
  const location = useLocation();

  return (
    // La div principale qui englobe l'ensemble du layout
    <div>
      {/* En-tête du layout */}
      <header>
        {/* Logo et navigation */}
        <div className="header-content">
          {/* Logo enveloppé dans un lien */}
          <Link to="/">
            <img src={logo} alt="Kasa logo" className="logo" />
          </Link>
          {/* Barre de navigation */}
          <nav>
            {/* Liste des éléments de navigation */}
            <ul>
              {/* Élément de navigation vers la page d'accueil */}
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                >
                  Accueil
                </Link>
              </li>
              {/* Élément de navigation vers la page 'À propos' */}
              <li>
                <Link
                  to="/about"
                  className={location.pathname === '/about' ? 'active' : ''}
                >
                  À Propos
                </Link>
              </li>
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
        <p>
          ⚠️ Ce site est une démo d'un projet OpenClassRooms par{' '}
          <a
            href="https://mikepixel.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>MikePixelDev</strong>
          </a>
        </p>
      </footer>
    </div>
  );
}

// Exportation du composant Layout pour pouvoir l'utiliser dans d'autres parties de l'application
export default Layout;
