import express from 'express';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import { model } from '../';
import { setActiveNavLink } from '../';
import featuredProjectContent from '../../src/content/featured-project.json';

const router = express.Router();

const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }
 
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

router.get('/featured-project', (req, res) => {
  const mainNavLinks = setActiveNavLink(model.mainNavLinks, req.path);
  
  fs.readFile(`${process.cwd()}/src/content/markdown.md`, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.render('featured-project', { ...model, ...featuredProjectContent, mainNavLinks, markdown: md.render(data) });
  });
});

export default router;