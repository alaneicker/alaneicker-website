import express from 'express';
import { model } from '../';
import homeContent from '../../src/content/home.json';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { ...model, ...homeContent });
});

export default router;