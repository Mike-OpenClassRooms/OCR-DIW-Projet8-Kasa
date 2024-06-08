// src/pages/AboutPage.jsx

import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';

const aboutBannerImg = './images/banner-kasa-about.webp';

const AboutPage = () => {
  return (
    <>
      <Banner imageUrl={aboutBannerImg} overlayOpacity={0.3} />
      <Collapse />
      <div className="about-benefits">
        {/* Exemple collapse fermé */}
        <div className="closed-collapse">
          <h2>Fiabilité</h2>
          <i class="fa-solid fa-chevron-up fa-2xl"></i>
        </div>
        {/* Exemple collapse ouvert */}
        <div className="full-collapse">
          <div className="opened-collapse">
            <h2>Fiabilité</h2>
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </div>
          <div className="collapse-content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>

        {/* Collapses ouverts de la page à propos */}

        {/* Collapse Fiabilité */}
        <div className="full-collapse">
          <div className="opened-collapse">
            <h2>Fiabilité</h2>
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </div>
          <div className="collapse-content">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les
              informations sont régulièrement vérifiées par nos équipes.
            </p>
          </div>
        </div>

        {/* Collapse Respect */}
        <div className="full-collapse">
          <div className="opened-collapse">
            <h2>Respect</h2>
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </div>
          <div className="collapse-content">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
              comportement discriminatoire ou de perturbation du voisinage
              entrainera une exclusion de notre plateforme.
            </p>
          </div>
        </div>

        {/* Collapse Service */}
        <div className="full-collapse">
          <div className="opened-collapse">
            <h2>Service</h2>
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </div>
          <div className="collapse-content">
            <p>
              Nos équipes se tiennent à votre disposition pour vous fournir une
              expérience parfaite. N'hésitez pas à nous contacter si vous avez
              la moindre question.
            </p>
          </div>
        </div>

        {/* Collapse Sécurité */}
        <div className="full-collapse">
          <div className="opened-collapse">
            <h2>Sécurité</h2>
            <i class="fa-solid fa-chevron-down fa-2xl"></i>
          </div>
          <div className="collapse-content">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établis par nos services. En laissant une note aussi bien
              à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
              que les standards sont bien respectés. Nous organisons également
              des ateliers sur la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
