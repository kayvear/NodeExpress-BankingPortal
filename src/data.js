const fs = require("fs");
const path = require("path");

const accountData = fs.readFileSync(
  path.join(__dirname, 'json', 'accounts.json'), 'utf-8'
  );
//console.log(`accountData ${accountData}`);
const accounts = JSON.parse(accountData);
//console.log(accounts.savings);

const userData = fs.readFileSync(
  path.join(__dirname, 'json', 'users.json'), 'utf-8'
  );
const users = JSON.parse(userData);

const writeJSON = () => {
  const accountsJSON = JSON.stringify(accounts,null,4);
  fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), accountsJSON, 'utf-8');
}

module.exports = {accounts, users, writeJSON};
