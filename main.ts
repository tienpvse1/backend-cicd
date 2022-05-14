import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World updatedtufyuitfuit !");
});

app.listen(3000);
