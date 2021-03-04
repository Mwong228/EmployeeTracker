const inquirer = require("inquirer");
const mysql = require('mysql')
const db = require( './app/connection' )('quotes_db','pass1234')
const cTable  = require("console.table");


async function main() {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        'Add departments', 'Add roles', 'Add employees', 'View departments', 'View roles', 'View employees', 'Update employee roles', 'Update employee managers', 'View employees by managers', 'Delete departments', 'Delete roles', 'Delete employees' 
      ]
    } 
  ]);

  // Call the appropriate function depending on what the user chose
  switch (answer.choice) {
    case "Add departments":
      addDepartments();
      break
    case "Add roles":
      addRoles();
      break
    case "Add employees":
      addEmployees();
      break
    case "View departments":
      viewDepartments();
      break
    case "View roles":
      viewRoles();
      break
    case "View employees":
      viewEmployees();
      break
    case "Update employee roles":
      updateEmployees();
      break
    case "Update employee managers":
      updateManager();
      break
    case "View employees by managers":
      viewManager();
      break
    case "Delete departments":
      deleteDepartment();
      break
    case "Delete roles":
      deleteRoles();
      break
    case "Delete employees":
      deleteEmployees();
      break
  }
}
