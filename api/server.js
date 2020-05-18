// I imported the pre-baked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Link the server and the router so that the endpoints can be accessed
const accountRouter = require("../accounts/accountRouter");

// const db = require("../data/dbConfig.js");

// Here, i am making use of the middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);
server.use("/account", accountRouter);

// Flesh out a dummy API
server.get("/", (req, res) => {
  res.send(`<h2>Building accounts endpoint!</h2>`);
});

// custom middleware
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} ${req.url} from ${req.get(
      "Origin"
    )}`
  );
  next();
}

// If the API is invalid
server.get("*", (req, res) => {
  res.status(404).json({ message: `Not found, sorry about that` });
});

// export the server to another file
module.exports = server;
