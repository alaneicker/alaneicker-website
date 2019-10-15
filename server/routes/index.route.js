import express from 'express';
import { model } from '../';

import aboutContent from '../../src/content/about.json';
import contactContent from '../../src/content/contact.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    ...model, 
    ...aboutContent,
    ...contactContent,
    isHome: true,
  });
});

export default router;