const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
require("dotenv").config();

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",
  
    // Your port; if not 3306
  port: 3306,
  
    // Your username
  user: "root",
  
    // Your password
  password: process.env.MYSQLPW,
  database: "employees_DB"
});
  
  // connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
    // run the start function after the connection is made to prompt the user
  start();
});

//Initial action function
function start() {
  inquirer
  .prompt({
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
          console.log("Work is complete!");
          connection.end();  
          break;
      }
    });
};

//Displaying all departments
function allDepartments(){
  console.log("Listing all departments...");
  connection.query("SELECT * FROM departments", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
};

//Displaying all roles
function allRoles() {
  console.log("Listing all roles...");
  connection.query("SELECT * FROM roles", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
};

//Displaying all employees
function allEmployees() {
  console.log("Listing all employees...");
  connection.query("SELECT * FROM employees", function(err, res) {
    if (err) throw err;
    console.table(res);
    start();
  });
};

//Adding a department
function addDept() {
  console.log("Adding a new department...");
  inquirer.prompt([
    {
      type: "input",
      message: "Enter a new department name",
      name: "newDept"
    },
  ])
  .then(function(res) {
    connection.query("INSERT INTO departments (dept_name) VALUES (?)", (res.newDept), 
    function(err) {
      if (err) throw err;
      console.table("A new department is added successfully!");
      start();
    })
  })
}

//Adding a new role
function addRole() {
  console.log("Adding a new role...");
  inquirer.prompt([
    {
      type: "input",
      message: "Enter a new role",
      name: "newRole"
    },
    {
      type: "input",
      message: "Enter the salary",
      name: "salary",
      validate: function(value) {
        if (isNaN(value) === false) {
          return true;
        }
        return false;
      }
    },
    {
      type: "number",
      message: "Enter the department ID",
      name: "deptID"
    }
  ])
  .then(function(res) {
    connection.query("INSERT INTO roles SET ?",
    {
      title: res.newRole,
      salary: res.salary || 0,
      dept_id: res.deptID
    },
    function(err) {
      if (err) throw err;
      console.table("A new role added successfully!")
      start();
    })
  })
}

// Adding an employee
function addEmp() {
  console.log("Adding an employee...");
  inquirer.prompt ([
    {
      type: "input",
      message: "Enter first name",
      name: "first"
    },
    {
      type: "input",
      message: "Enter last name",
      name: "last"
    },
    {
      type: "number",
      message: "Enter Role ID",
      name: "roleID"
    },
    /*{
      type: "number",
      message: "Enter the employee ID of the manager. If employee has no manager, leave it blank.",
      name: "managerID",
    }*/
  ])
  .then(function(res) {
    connection.query(
      "INSERT INTO employees SET ?",
      {
        first_name: res.first,
        last_name: res.last,
        role_id: res.roleID,
        //manager_id: res.managerID
      },
      function(err) {
        if (err) throw err;
        console.table("A new employee is successfully added!");
        start();
      }
  );
  });
}

// update employee info
function update() {
  connection.query("SELECT * FROM employees", function(err, results) {
    if (err) throw err;

    inquirer.prompt([
      {
        name: "empName",
        type: "rawlist",
        choices: function() {
          var empList = [];
          for (let i = 0; i < results.length; i++) {
            empList.push(results[i].first_name + results[i].last_name);
          }
          return empList;
        },
        message: "Who would you like to update?"
      },
      {
        name: "choices",
        type: "rawlist",
        choices: function() {
          var choiceArray = [];
          for (let i = 0; i < results.length; i++) {
            choiceArray.push(results[i].role_id);
          }
          return choiceArray;
        },
        message: "Select a new role"
      }
    ])
  })
}