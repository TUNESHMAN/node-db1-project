const express = require("express");

// I imported the helper functions
const accounts = require("./accountDb");

// I imported the router
const router = express.Router();

// The account endpoints here
router.get("/", (req, res) => {
  accounts
    .getAccount()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((error) => {
      res.status().json({ message: error.message, stack: error.stack });
    });
});
// I exposed the router to the outer world
module.exports = router;
