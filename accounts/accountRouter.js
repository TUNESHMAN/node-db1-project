const express = require("express");

// I imported the helper functions
const accounts = require("./accountDb");

// I imported the router
const router = express.Router();

// The account endpoints here
router.get("/", (req, res) => {
  res.json("AAAAhhhh");
});
// I exposed the router to the outer world
module.exports = router;
