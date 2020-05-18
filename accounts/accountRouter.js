const express = require("express");

// I imported the helper functions
const accounts = require("./accountDb");

// I imported the router
const router = express.Router();

// The account endpoints here

// Endpoint to get all accounts
router.get("/", (req, res) => {
  accounts
    .getAccount()
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

//  Endpoint to get server by ID
router.get("/:id", validateAccountId, (req, res) => {
  // The id will come from params
});

// Middleware here
function validateAccountId(req, res, next) {
  // The id comes from req.params
  const { id } = req.params;
  accounts
    .getAccountById(id)
    .then((account) => {
      if (account) {
        res.status(200).json(account);
      } else if (account.length < 1) {
        res.status(500).json({ message: `The account id is invalid` });
      } else {
        next();
      }
    })
    .catch((error) => {
      res.status(500).json({ message: `error.message`, stack: error.stack });
    });
}
// I exposed the router to the outer world
module.exports = router;
