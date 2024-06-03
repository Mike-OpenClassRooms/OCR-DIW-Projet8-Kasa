// src/pages/HomePage.jsx
import Banner from '../components/Banner/Banner';
import HousingCard from '../components/HousingCard/HousingCard';

const homeBannerImg = './images/banner-kasa-home.webp';

const HomePage = () => {
  return (
    <>
      <Banner imageUrl={homeBannerImg} title="Chez vous, partout et ailleurs" />
      <HousingCard />
    </>
  );
};

export default HomePage;
