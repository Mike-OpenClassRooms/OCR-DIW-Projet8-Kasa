// src/pages/AboutPage.jsx
// Ce composant gère la page À Propos de l'application Kasa.

import { useEffect } from 'react';
import Banner from '../components/Banner/Banner'; // Importation du composant Banner
import Collapse from '../components/Collapse/Collapse'; // Importation du composant Collapse

const aboutBannerImg = './images/banner-kasa-about.webp'; // Définition du chemin de l'image pour la bannière

// Définition du composant AboutPage
const AboutPage = () => {
  useEffect(() => {
    // Mettre à jour le titre de la page
    document.title = 'Kasa • À propos';

    // Ajouter une balise canonique pour la page À propos
    const canonicalLink = document.createElement('link');
    canonicalLink.rel = 'canonical';
    canonicalLink.href = 'https://kasa.city/about';
    document.head.appendChild(canonicalLink);

    // Nettoyer la balise canonique lorsque le composant est démonté
    return () => {
      document.head.removeChild(canonicalLink);
    };
  }, []);

  return (
    <>
      {/* Utilisation du composant Banner avec les props imageUrl et overlayOpacity */}
      <Banner imageUrl={aboutBannerImg} overlayOpacity={0.3} />

      {/* Section contenant les différentes valeurs de la page À Propos avec des menus déroulants */}
      <div className="about-benefits">
        {/* Utilisation du composant Collapse pour chaque valeur */}
        <Collapse title="Fiabilité">
          <p>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entrainera une exclusion de notre plateforme.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p>
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default AboutPage; // Exportation du composant pour utilisation dans d'autres parties de l'application
