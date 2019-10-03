import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;

const staticPath = path.join(
  __dirname, 
  env === 'production' ? '..': '.', 
  'public'
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(express.static(staticPath));

app.listen(port, () => {
  console.log('App listening on port:', port);
});