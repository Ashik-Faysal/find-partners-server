const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const joinUs = require("./data/joinUs.json");
const recommended = require("./data/recommended.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Find Partner is running");
});

app.get("/recommended", (req, res) => {
  res.send(recommended);
});

app.get("/recommended/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);

  const selectedRecommended = recommended.find((n) => n.id == id);
  console.log(selectedRecommended);
  res.send(selectedRecommended);
});

app.get("/joinUs", (req, res) => {
  res.send(joinUs);
});

app.listen(port, () => {
  console.log(`Find Partner is listening on port : ${port}`);
});
