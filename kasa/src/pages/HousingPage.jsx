// src/pages/HousingPage.jsx
import { useParams } from 'react-router-dom';

const HousingPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Page logements</h2>
      <p>Détails {id}</p>
    </div>
  );
};

export default HousingPage;