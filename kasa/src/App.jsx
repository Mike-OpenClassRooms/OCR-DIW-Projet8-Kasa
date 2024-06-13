// src/App.jsx

// Importation du composant AppRouter depuis le fichier './components/Router'
import AppRouter from './components/Router';

// Définition de la fonction composant App
function App() {
  // La fonction retourne un élément JSX
  return (
    // Le div englobant le composant AppRouter
    <div>
      {/* AppRouter est le composant principal qui gère la navigation */}
      <AppRouter />
    </div>
  );
}

// Exportation du composant App pour pouvoir l'utiliser dans d'autres parties de l'application
export default App;
