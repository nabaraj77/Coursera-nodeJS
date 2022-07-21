const http = require("http");
const server = http.createServer((req, res) => {
  console.log("Server created");
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("Hello Nabaraj");
});

server.listen(3000, () => {
  console.log("Listening to port 3000....");
});
