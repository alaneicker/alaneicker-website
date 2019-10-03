import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import MarkdownIt from 'markdown-it';

const app = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const md = new MarkdownIt();

const staticPath = path.join(
  __dirname, 
  env === 'production' ? '..': '.', 
  'public'
);

app.set('view engine', 'vash');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  fs.readFile('./markdown.md', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.render('index', { markdown: md.render(data) });
  });
});

app.listen(port, () => {
  console.log('App listening on port:', port);
});