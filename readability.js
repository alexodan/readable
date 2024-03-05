const { Readability } = require("@mozilla/readability");
const { JSDOM } = require("jsdom");
const fetch = require("node-fetch");

module.exports = {
  getArticle: async function (url) {
    const response = await fetch(url);
    const html = await response.text();
    const doc = new JSDOM(html);
    const reader = new Readability(doc.window.document);
    const article = reader.parse();
    return {
      title: article.title,
      byline: article.byline,
      content: article.content,
    };
  },
};
