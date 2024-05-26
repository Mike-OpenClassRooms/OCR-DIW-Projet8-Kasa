// Importation des composants Router, Route et Switch de react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

// Importation des différentes pages de l'application
import HomePage from '../pages/HomePage'; // Page d'accueil
import AboutPage from '../pages/AboutPage'; // Page "À propos"
import HousingPage from '../pages/HousingPage'; // Page pour les logements (avec un paramètre d'ID)
import Error404Page from '../pages/Error404Page'; // Page d'erreur 404
import Layout from './Layout'; // Composant de mise en page globale

// Définition du composant AppRouter
function AppRouter() {
  return (
    // Le composant Router englobe l'ensemble de l'application pour gérer les routes
    <Router>
      {/* Le composant Layout est utilisé pour encapsuler la structure globale de la page */}
      <Layout>
        {/* Le composant Switch rend uniquement le premier <Route> qui correspond à l'URL actuelle */}
        <Switch>
          {/* Route exacte pour la page d'accueil */}
          <Route exact path="/" component={HomePage} />
          {/* Route pour la page "À propos" */}
          <Route path="/about" component={AboutPage} />
          {/* Route pour une page de logement spécifique, identifiée par un paramètre ID */}
          <Route path="/property/:id" component={HousingPage} />
          {/* Route par défaut pour les URL non correspondantes, affichant une page d'erreur 404 */}
          <Route component={Error404Page} />
        </Switch>
      </Layout>
    </Router>
  );
}

// Exportation du composant AppRouter pour utilisation dans d'autres parties de l'application
export default AppRouter;