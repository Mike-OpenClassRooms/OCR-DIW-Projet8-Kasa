// Importation des hooks et composants nécessaires depuis 'react' et 'react-router-dom'
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Error404Page() {
  // Hook de navigation pour rediriger l'utilisateur vers une autre route
  const navigate = useNavigate();

  // Utilisation de useEffect pour exécuter un effet secondaire après le montage du composant
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = "Dommage, la page n'existe pas !";

    // Vérifier s'il y a déjà une balise canonique existante et la supprimer
    const existingCanonicalLink = document.querySelector(
      'link[rel="canonical"]',
    );
    if (existingCanonicalLink) {
      document.head.removeChild(existingCanonicalLink);
    }

    // Définir un timeout pour rediriger l'utilisateur vers la page d'accueil après 5 secondes
    const timer = setTimeout(() => {
      navigate('/'); // Redirige l'utilisateur vers la page d'accueil
    }, 5000);

    // Nettoyer le timeout si le composant est démonté avant la fin du délai
    // Cela évite les fuites de mémoire et les erreurs si le composant est démonté avant la fin du timeout
    return () => clearTimeout(timer);
  }, [navigate]); // Le tableau de dépendances contient 'navigate', donc l'effet ne se déclenchera que lorsque 'navigate' change

  return (
    // Conteneur principal de la page 404 avec une classe CSS pour le style
    <div className="error404">
      {/* Titre principal affichant le code d'erreur 404 */}
      <h1>404</h1>
      {/* Message informant l'utilisateur que la page demandée n'existe pas */}
      <p>Oups! La page que vous demandez n'existe pas.</p>
      {/* Lien permettant à l'utilisateur de retourner à la page d'accueil */}
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

// Exportation du composant pour qu'il puisse être utilisé ailleurs dans l'application
export default Error404Page;
