import express, { Router } from "express";
import cors from "cors";
import serverless from "serverless-http";
import { getArticle } from "./readability.js";

const api = express();
const router = Router();

api.use(cors());

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/read", async (req, res) => {
  const url = req.query.url;
  const article = await getArticle(url);
  res.json(article);
});

api.use("/api/", router);

export const handler = serverless(api);
