const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our Home page");
  }
  if (req.url === "/about") {
    res.write("Here is our short history");
  }
  res.write(`<h1>Oops!</h1>
    <p>sorry we could not find the page you are looking for</p>
    <a href="/">go back home</a>
    `);

  res.end;
});

server.listen(5000);
