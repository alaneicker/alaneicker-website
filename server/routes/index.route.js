import express from 'express';
import { model, setActiveNavLink } from '../';

import homeContent from '../../src/content/home.json';
import aboutContent from '../../src/content/about.json';
import contactContent from '../../src/content/contact.json';
import featuredProjectContent from '../../src/content/featured-project.json';

const router = express.Router();

router.get('/', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);

  res.render('index', { 
    ...model, 
    ...homeContent,
    ...aboutContent,
    ...contactContent,
    ...featuredProjectContent,
    mainNavLinks, 
    isHome: true,
  });
});

export default router;