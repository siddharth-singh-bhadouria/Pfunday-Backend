const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Use /hello to get Hello World response");
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("LISTENING TO PORT 3000!!!");
});
