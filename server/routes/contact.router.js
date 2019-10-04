import express from 'express';
import { model } from '../';
import { setActiveNavLink } from '../';
import contactContent from '../../src/content/contact.json';

const router = express.Router();

router.get('/contact-me', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);

  res.render('contact', { 
    ...model, 
    ...contactContent,
    mainNavLinks, 
  });
});

export default router;