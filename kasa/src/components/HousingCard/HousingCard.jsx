// Ce composant gère les logements affichés sur la page d’accueil.

import './HousingCard.scss';
import logements from '../../data/logements.json';

const HousingCard = () => {
  return (
    <section className="housing-display">
      {logements.map((logement) => (
        <div key={logement.id} className="housing-home">
          <img
            src={logement.cover}
            alt={logement.title}
            className="housing-img-home"
          />
          <h2 className="housing-title-home">{logement.title}</h2>
        </div>
      ))}
    </section>
  );
};

export default HousingCard;
