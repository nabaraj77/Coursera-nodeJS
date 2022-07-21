const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());
const port = 3000;

app.use(express.static(`${__dirname}/public`));
app.all("/dishes", (req, res, next) => {
  res.statusCode = 200;
  (res.header = "Content-Type"), "plain-text";
  next();
});

app.get("/dishes", (req, res) => {
  res.end("You will get all the dishes list here");
});

app.post("/dishes", (req, res) => {
  res.end(`You have orderes: ${req.body.name} and ${req.body.des}`);
});

app.put("/dishes", (req, res) => {
  res.statusCode = 403;
  res.end("Put not supported");
});

app.delete("/dishes", (req, res) => {
  res.end("All Items Deleted");
});

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
