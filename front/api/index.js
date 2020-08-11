"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(helmet());

app.use(bodyParser.json());

app.get("/subscribe", (req, res) => {
  res.send({ message: "test kong" });
});

app.post("/subscribe", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

const port = 5000;

module.exports = app;

if (require.main === module) {
  app.listen(port, () => console.log(`Server started on port ${port}`));
}
