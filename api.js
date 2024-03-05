import express from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getArticle } from "./readability.js";

const app = express();
app.use(cors());

app.get("/", (req, res) => res.send("Hello World"));
app.get("/read", async (req, res) => {
  const url = req.query.url;
  const article = await getArticle(url);
  res.json(article);
});

app.listen(3000, () => console.log("Local app listening on port 3000!"));

export const handler = serverless(app);
