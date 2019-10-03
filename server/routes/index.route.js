import express from 'express';
import fs from 'fs';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

const router = express.Router();

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
      } catch (__) {}
    }
 
    return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
  }
});

router.get('/', (req, res) => {
  fs.readFile(`${process.cwd()}/content/markdown.md`, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    }
    res.render('index', { markdown: md.render(data) });
  });
});

export default router;