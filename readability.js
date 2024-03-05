import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import fetch from "node-fetch";

export const getArticle = async (url) => {
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
};
