const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');
const glob = require('glob');

const PAGES_DIR = path.join(__dirname, 'src/pages');
const SITEMAP_PATH = path.join(__dirname, 'public', 'sitemap.xml');
const BASE_URL = 'https://kasa.city';

const getRoutes = () => {
  return new Promise((resolve, reject) => {
    glob(`${PAGES_DIR}/**/*.jsx`, (err, files) => {
      if (err) {
        reject(err);
      } else {
        const routes = files.map((file) => {
          const relativePath = path.relative(PAGES_DIR, file);
          const route = relativePath.replace(/\.jsx$/, '').replace(/\\/g, '/');
          return route === 'HomePage' ? '' : route.toLowerCase();
        });
        resolve(routes);
      }
    });
  });
};

const generateSitemap = async () => {
  const routes = await getRoutes();

  const urlset = xmlbuilder
    .create('urlset', { version: '1.0', encoding: 'UTF-8' })
    .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

  routes.forEach((route) => {
    urlset
      .ele('url')
      .ele('loc', `${BASE_URL}/${route}`)
      .up()
      .ele('changefreq', 'daily')
      .up()
      .ele('priority', 0.8)
      .up();
  });

  const xml = urlset.end({ pretty: true });

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf8');
  console.log(`Sitemap has been generated at ${SITEMAP_PATH}`);
};

generateSitemap().catch(console.error);
