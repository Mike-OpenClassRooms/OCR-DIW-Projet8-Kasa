// src/pages/AboutPage.jsx

import Banner from '../components/Banner/Banner';

const aboutBannerImg = './images/banner-kasa-about.webp';

const AboutPage = () => {
  return (
    <>
      <Banner imageUrl={aboutBannerImg} overlayOpacity={0.3} />
    </>
  );
};

export default AboutPage;
