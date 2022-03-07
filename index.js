const express = require("express");
const app = express();

app.get("/", (_req, res, _next) => {
  res.json("Hello from bonus 1");
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
