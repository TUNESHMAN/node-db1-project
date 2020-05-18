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
router.get("/:id", validateAccountId, (req, res) => {});

// Endpoint to add an account
router.post("/", validateAccount, (req, res) => {
  const newAccount = req.body;
  accounts
    .postAccount(newAccount)
    .then((account) => {
      res.status(201).json({
        message: `Account has been added successfully`,
      });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

// Endpoint for updating an account
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const replacementAccount = req.body;
  accounts
    .updateAccount(id, replacementAccount)
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((error) => {
      console.log(replacementAccount);
      res.status(500).json({ message: error.message, stack: error.stack });
    });
});

router.delete("/:id", (req, res) => {
  // We get the id
  const { id } = req.params;
  accounts
    .deleteAccount(id)
    .then((account) => {
      res.status(200).json({ message: `Deleted successfully` });
    })
    .catch((error) => {
      res.status(500).json({ message: error.message, stack: error.stack });
    });
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

function validateAccount(req, res, next) {
  const NewAccount = req.body;
  if (Object.keys(NewAccount).length === 0) {
    res.status(400).json({ message: `Please add the account details` });
  } else if (!NewAccount.name) {
    res.status(400).json({ message: `You have not named this account` });
  } else if (!NewAccount.budget) {
    res.status(400).json({ message: `Please input account budget` });
  } else {
    next();
  }
}

// I exposed the router to the outer world
module.exports = router;
