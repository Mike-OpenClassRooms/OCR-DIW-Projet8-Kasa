const fs = require('fs');
const path = require('path');
const xmlbuilder = require('xmlbuilder');
const glob = require('glob');

// Chemin absolu vers le fichier JSON des logements
const logementsPath = path.resolve(__dirname, 'src', 'data', 'logements.json');

// Charger les données de logements depuis le fichier JSON
const logements = require(logementsPath);

const sitemap = xmlbuilder
  .create('urlset', {
    version: '1.0',
    encoding: 'UTF-8',
  })
  .att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

// Ajouter l'URL de la page d'accueil
sitemap
  .ele('url')
  .ele('loc', 'https://kasa.city/')
  .up()
  .ele('lastmod', new Date().toISOString().split('T')[0])
  .up()
  .ele('changefreq', 'yearly')
  .up()
  .ele('priority', '1.0')
  .up();

// Ajouter l'URL de la page "À propos"
sitemap
  .ele('url')
  .ele('loc', 'https://kasa.city/about')
  .up()
  .ele('lastmod', new Date().toISOString().split('T')[0])
  .up()
  .ele('changefreq', 'yearly')
  .up()
  .ele('priority', '0.8')
  .up();

// Ajouter les URLs des pages de logement
logements.forEach((logement) => {
  sitemap
    .ele('url')
    .ele('loc', `https://kasa.city/housing/${logement.id}`)
    .up()
    .ele('lastmod', new Date().toISOString().split('T')[0])
    .up()
    .ele('changefreq', 'yearly')
    .up()
    .ele('priority', '0.8')
    .up();
});

const xmlString = sitemap.end({ pretty: true });
const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');

fs.writeFileSync(outputPath, xmlString, 'utf8');
console.log(`Sitemap has been generated at ${outputPath}`);
