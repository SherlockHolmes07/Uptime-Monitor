/*
 * Primary File for an API
 */

//Dependencies
const http = require("http");
const url = require("url");

//Creating a server and making it response to any request
const server = http.createServer((req, res) => {
  //Parsing the URL
  const parsedUrl = url.parse(req.url, true);

  //Getting the path
  const path = parsedUrl.pathname;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");

  //Getting the request method
  const method = req.method.toUpperCase();

  //Getting the query string as an object
  const queryStringObject = parsedUrl.query;

  //Parsing headers
  const headers = req.headers;

  //Returning the response
  res.end("Hello World");

  //logging the path
  console.log(
    "parsing header:",
    headers
  );
});

//Making server listen
server.listen(3000, () => console.log("Listining on port 3000"));
