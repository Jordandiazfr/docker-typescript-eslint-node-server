import express from "express";
const port = 80;
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to backend");
});

app.listen(port, () => {
  console.log(`Server up in port ${port}`);
});
