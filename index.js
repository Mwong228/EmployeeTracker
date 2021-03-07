const inquirer = require("inquirer");
const mysql = require('mysql')
const db = require( './app/connection' )('sql_employees','pass1234')
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
      updateEmployeesRole();
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

async function addDepartments(){
  const newDepartment = await inquirer.prompt([
    {
      type: "input", 
      name: "department", 
      message: "Enter a New Department"
    }
  ])
  await db.query('INSERT INTO department (name) VALUE (?)', [newDepartment.department])
  let department = await db.query('SELECT * FROM department')
  console.table(department)
  main()
}

async function addRoles(){
  const newRole = await inquirer.prompt([
    {
      type:"input",
      name: "title",
      message: "What is the employee title"
    },
    {
      type:"input",
      name: "salary",
      message: "What is the employee salary"
    },
    {
      type:"input",
      name: "department_id",
      message: "What is the employee department"
    },
  ])
  await db.query('INSERT INTO role (title, salary, department_id) VALUE (?,?,?)', [newRole.title, newRole.salary, newRole.department_id])
  let role = await db.query('SELECT * FROM role')
  console.table(role)
  main()
}

async function addEmployees(){
  let newEmployee = await inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is employee first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is employee last name?"
    },
    {
      type: "input",
      name: "role_id",
      message: "What is thier role ID?"
    },
    {
      type: "input",
      name: "manager_id",
      message: "Who is their manager?"
    }
  ])
  await db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE (?,?,?,?)', [newEmployee.first_name, newEmployee.last_name, newEmployee.role_id, newEmployee.manager_id])
  let employee = await db.query('SELECT * FROM employee')
  console.table(employee)
  main()
}

async function viewDepartments() {
  let department = await db.query('SELECT * FROM department')
  console.table(department)
  main()
}

async function viewRoles() {
  let role = await db.query('SELECT * FROM role')
  console.table(role)
  main()
}

async function viewEmployees() {
  let employee = await db.query('SELECT * FROM employee')
  console.table(employee)
  main()
}

async function updateEmployeesRole(){
  let role = await db.query('SELECT * FROM role')
  console.table(role)
  let updateER = await inquirer.prompt([
    {
      type: "input",
      name: "role_id",
      message: "Which employee role would you like to update (by employee ID)"
    },
    {
      type: "input",
      name: "title",
      message: "What is the new employee role title"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the new employee role salary"
    },
    {
      type: "input",
      name: "department_id",
      message: "What is the new employee role department ID"
    },
  ])
  await db.query('UPDATE role SET title=?, salary=?, department_id=? WHERE id=?', [updateER.title, updateER.salary, updateER.department_id, updateER.role_id])
  console.log('Updated')
  let updateRole = await db.query('SELECT * FROM role')
  console.table(updateRole)
}

main()