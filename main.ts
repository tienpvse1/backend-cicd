import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World updated!");
});

app.listen(3000);
