"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/test", async (req, res) => {
  res.send({ message: "asss" });
});

app.post("/aaa", (req, res) => {
  res.send({ message: req.body });
});

app.post("/test", (req, res) => {
  console.log(req.body)
  res.send(req.body);
});

const port = 5001;

module.exports = app;

if (require.main === module) {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}
