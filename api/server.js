// I imported the pre-baked middleware
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

// Link the server and the router so that the endpoints can be accessed
const accountRouter = require("../accounts/accountRouter");

const db = require("../data/dbConfig.js");

// Here, i am making use of the middleware
server.use(express.json());
server.use(cors);
server.use(helmet);
server.use("/account", accountRouter);

// Flesh out a dummy API
server.get("/", (req, res) => {
  res.send(`<h2>Building accounts endpoint!</h2>`);
});

module.exports = server;
