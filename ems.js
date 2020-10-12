const mysql = require("mysql");
const inquirer = require("inquire");
const consoleTable = require("console.table");
const { allowedNodeEnvironmentFlags } = require("process");
const { ADDRGETNETWORKPARAMS } = require("dns");
const dotEnv = require("dotenv").config();

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.MYSQLPW,
    database: "greatBay_DB"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
  });

  function start() {
    inquirer.prompt({
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee roles",
        "Quit"
      ]
    })
    .then(function(answer) {
      console.log(answer.action);
      switch (answer.action) {
        case "View all departments":
          allDepartments();
          break;

        case "View all roles":
          allRoles();
          break;
        
        case "View all employees":
          allEmployees();
          break;

        case "Add a department":
          addDept();
          break;

        case "Add a role":
          addRole();
          break;

        case "Add an employee":
          addEmp();
          break;

        case "Update employee roles":
          update();
          break;

        case "Quit":
          quit();
          break;
      }
    });
  }