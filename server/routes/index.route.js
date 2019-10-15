import express from 'express';
import { model } from '../';

import aboutContent from '../../src/content/about.json';
import socialMediaContent from '../../src/content/social-media.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    ...model, 
    ...aboutContent,
    ...socialMediaContent,
    isHome: true,
  });
});

export default router;