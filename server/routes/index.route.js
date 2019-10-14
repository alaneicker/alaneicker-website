import express from 'express';
import { model } from '../';

import aboutContent from '../../src/content/about.json';
import contactContent from '../../src/content/contact.json';
import featuredProjectContent from '../../src/content/featured-project.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    ...model, 
    ...aboutContent,
    ...contactContent,
    ...featuredProjectContent,
    isHome: true,
  });
});

export default router;