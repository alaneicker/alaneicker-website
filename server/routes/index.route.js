import express from 'express';
import { model, setActiveNavLink } from '../';

import aboutContent from '../../src/content/about.json';
import contactContent from '../../src/content/contact.json';
import featuredProjectContent from '../../src/content/featured-project.json';

const router = express.Router();

router.get('/', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);

  res.render('index', { 
    ...model, 
    ...aboutContent,
    ...contactContent,
    ...featuredProjectContent,
    mainNavLinks, 
    isHome: true,
  });
});

export default router;