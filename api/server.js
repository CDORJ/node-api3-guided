const express = require("express"); // importing a CommonJS module
const morgan = require("morgan");
const helmet = require("helmet");

const hubsRouter = require("./hubs/hubs-router.js");
const mw = require("./middleware/middleware.js");
const server = express();

server.use(helmet(), express.json(), morgan("dev"));
// server.use(express.json());
// server.use(morgan("dev"));
// server.use(logQuote("rhino"));

server.use("/api/hubs", hubsRouter);

server.get("/", mw.checkWord, mw.logQuote("penny"), (req, res) => {
  const nameInsert = req.name ? ` ${req.name}` : "";

  res.send(`
    <h2>Lambda Hubs API</h2>
    <p>Welcome${nameInsert} to the Lambda Hubs API</p>
  `);
});

module.exports = server;
