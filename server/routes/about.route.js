import express from 'express';
import { model } from '../';
import { setActiveNavLink } from '../';
import aboutContent from '../../src/content/about.json';

const router = express.Router();

router.get('/about', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);

  res.render('about', { 
    ...model, 
    ...aboutContent,
    mainNavLinks,
  });
});

export default router;