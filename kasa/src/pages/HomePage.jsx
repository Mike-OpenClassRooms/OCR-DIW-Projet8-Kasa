// Importation des hooks et composants nécessaires depuis React et leurs chemins relatifs
import { useEffect } from 'react';
import Banner from '../components/Banner/Banner';
import HousingCard from '../components/HousingCard/HousingCard';

// Définition de l'image de la bannière pour la page d'accueil
const homeBannerImg = './images/banner-kasa-home.webp';

// Déclaration du composant fonctionnel HomePage
const HomePage = () => {
  // Utilisation de useEffect pour mettre à jour le titre de la page lorsque le composant est monté
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = 'Kasa • Location d’appartements entre particuliers';

    // Nettoyer la balise canonique lorsque le composant est démonté
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      document.head.removeChild(canonicalLink);
    }
    // Ajouter une balise canonique pour la page d'accueil
    const newCanonicalLink = document.createElement('link');
    newCanonicalLink.rel = 'canonical';
    newCanonicalLink.href = 'https://kasa.city/';
    document.head.appendChild(newCanonicalLink);

    return () => {
      document.head.removeChild(newCanonicalLink);
    };
  }, []);

  // Retourne le rendu JSX de la page d'accueil
  return (
    <>
      {/* Utilisation du composant Banner avec les props imageUrl, title et overlayOpacity */}
      <Banner
        imageUrl={homeBannerImg}
        title="Chez vous, partout et ailleurs"
        overlayOpacity={0.6}
      />
      {/* Utilisation du composant HousingCard sans props supplémentaires */}
      <HousingCard />
    </>
  );
};

// Exportation du composant HomePage pour utilisation dans d'autres parties de l'application
export default HomePage;
