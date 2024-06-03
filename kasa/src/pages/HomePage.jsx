// src/pages/HomePage.jsx
import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner/Banner';
import HousingCard from '../components/HousingCard/HousingCard';

const HomePage = () => {
  return (
      <main>
        <Banner />
        <HousingCard />
      </main>
  );
};

export default HomePage;