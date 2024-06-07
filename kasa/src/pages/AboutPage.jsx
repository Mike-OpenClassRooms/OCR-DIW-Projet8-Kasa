// src/pages/AboutPage.jsx

import Banner from '../components/Banner/Banner';
import Collapse from '../components/Collapse/Collapse';

const aboutBannerImg = './images/banner-kasa-about.webp';

const AboutPage = () => {
  return (
    <>
      <Banner imageUrl={aboutBannerImg} overlayOpacity={0.3} />
      <Collapse />
    </>
  );
};

export default AboutPage;
