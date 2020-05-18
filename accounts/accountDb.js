const db = require("../data/dbConfig");

module.exports = {
  getAccount,
  getAccountById,
  //   deleteAccount,
  postAccount,
  //   updateAccount,
};

function getAccount() {
  // I will use db to do sql with JavaScript
  // I tried to do the equivalent of SELECT * FROM accounts
  return db("accounts");
}

function getAccountById(id) {
  // I did the equivalent of SELECT * FROM accounts WHERE id=id
  return db("accounts").where({ id }).first();
}

function postAccount({name, budget}) {
  // I did the equivalent of INSERT INTO (name,budget)
  // VALUES(name,budget)
  return db("accounts").insert({ name: name, budget: budget });
}
