const express = require("express");
const app = express();
const API = require("./countryInfos");

app.get("/", (_req, res, _next) => {
  res.json(API);
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
