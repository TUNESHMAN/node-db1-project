const db = require("../data/dbConfig");

module.exports = {
  getAccount,
  //   getAccountById,
  //   deleteAccount,
  //   postAccount,
  //   updateAccount,
};

// const getAccount = () => {
//   // I will use db to do sql with JavaScript
//   // I tried to do the equivalent of SELECT * FROM accounts
//   return db("accounts");
// };
function getAccount() {
  return db("accounts");
}
