import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import sslRedirect from 'heroku-ssl-redirect';

import cors from 'cors';
import path from 'path';

import indexRoute from './routes/index.route';
import featuredProjectRoute from './routes/featured-project.route';
import aboutRoute from './routes/about.route';
import contactRoute from './routes/contact.router';

import baseContent from '../src/content/base.json';
import mainNavLinks from '../src/content/main-nav.json';

export const model = {
  ...baseContent,
  copyright: `&copy; ${new Date().getFullYear()} Alan Eicker`,
  mainNavLinks,
};

export const setActiveNavLink = (links, path) => {
  return links.map(link => {
    return link.url === path
      ? { ...link, class: 'is-active' }
      : link;
  });
};

const app = express();
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, '..', 'public');
const viewsPath = path.join(__dirname, '..', 'src/views');

app.set('view engine', 'vash');
app.set('views', viewsPath);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(sslRedirect());
app.use(compression());
app.use(cors());
app.use(express.static(staticPath));

app.use('/', indexRoute);
app.use('/', featuredProjectRoute);
app.use('/', aboutRoute);
app.use('/', contactRoute);

app.listen(port, () => {
  console.log('App listening on port:', port);
});