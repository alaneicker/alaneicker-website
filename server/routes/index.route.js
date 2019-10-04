import express from 'express';
import { model } from '../';
import { setActiveNavLink } from '../';
import homeContent from '../../src/content/home.json';

const router = express.Router();

router.get('/', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);

  res.render('index', { ...model, mainNavLinks, ...homeContent });
});

export default router;