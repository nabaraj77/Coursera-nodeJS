const express = require("express");
const app = express();
const parser = require("body-parser");
app.use(parser.json());
const port = 3000;

app.use(express.static(`${__dirname}/public`));
//IMPORTING dishROuter
const dishROuter = require("../routes/dishRouter");
app.use("/dishes", dishROuter);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
