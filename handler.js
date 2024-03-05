"use strict";

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Go Serverless v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

module.exports.read = async (event) => {
  const { getArticle } = require("./readability");
  const url = event.queryStringParameters.url;
  const article = await getArticle(url);
  return {
    statusCode: 200,
    body: JSON.stringify(article, null, 2),
  };
};
