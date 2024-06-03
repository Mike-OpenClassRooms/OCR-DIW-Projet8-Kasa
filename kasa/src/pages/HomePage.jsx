// src/pages/HomePage.jsx
import Banner from '../components/Banner/Banner';
import HousingCard from '../components/HousingCard/HousingCard';

const homeBannerImg = './images/banner-kasa-home.webp';

const HomePage = () => {
  return (
    <main>
      <Banner imageUrl={homeBannerImg} altText="Image de la banière d'accueil de Kasa" />
      <HousingCard />
    </main>
  );
};

export default HomePage;