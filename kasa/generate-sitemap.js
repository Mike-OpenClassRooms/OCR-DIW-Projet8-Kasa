const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');
const glob = require('glob');

// Fonction pour récupérer les données de logement depuis le fichier JSON
const getHousingData = () => {
  const dataPath = path.join(__dirname, 'src', 'data', 'logements.json');
  const data = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(data);
};

const getRoutes = () => {
  return new Promise((resolve, reject) => {
    glob('src/pages/**/*.jsx', (err, files) => {
      if (err) {
        reject(err);
      } else {
        const routes = files
          .map((file) => {
            const route = file
              .replace('src/pages/', '')
              .replace('.jsx', '')
              .toLowerCase();
            if (route === 'index') return '/';
            if (route === 'aboutpage') return '/about';
            return null; // Ignore other pages, will handle housing separately
          })
          .filter((route) => route !== null);
        resolve(routes);
      }
    });
  });
};

const generateSitemap = async () => {
  const routes = await getRoutes();
  const housingData = getHousingData();
  const urls = [
    ...routes.map((route) => ({
      loc: route,
      lastmod: '2024-07-16',
      changefreq: route === '/' ? 'monthly' : 'yearly',
      priority: route === '/' ? 1.0 : 0.8,
    })),
    ...housingData.map((housing) => ({
      loc: `/housing/${housing.id}`,
      lastmod: '2024-07-16',
      changefreq: 'yearly',
      priority: 0.8,
    })),
  ];

  const urlset = xmlbuilder
    .create('urlset', { encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  urls.forEach((url) => {
    const urlElement = urlset.ele('url');
    urlElement.ele('loc', `https://kasa.city${url.loc}`);
    urlElement.ele('lastmod', url.lastmod);
    urlElement.ele('changefreq', url.changefreq);
    urlElement.ele('priority', url.priority);
  });

  const xmlString = urlset.end({ pretty: true });
  const filePath = path.join(__dirname, 'public', 'sitemap.xml');
  fs.writeFileSync(filePath, xmlString, 'utf8');
  console.log(`Sitemap has been generated at ${filePath}`);
};

generateSitemap().catch((err) => console.error(err));
