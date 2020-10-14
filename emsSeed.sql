DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
id INTEGER AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id),
dept_name VARCHAR(30)
);

CREATE TABLE roles (
id INTEGER AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id),
title VARCHAR(30),
salary DECIMAL,
dept_id INTEGER NOT NULL,
FOREIGN KEY (dept_id) REFERENCES departments(id)
);

CREATE TABLE employees (
id INTEGER AUTO_INCREMENT NOT NULL,
PRIMARY KEY (id),
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER NOT NULL,
FOREIGN KEY (role_id) REFERENCES roles(id),
manager_id INTEGER,
FOREIGN KEY (manager_id) REFERENCES employees(id)
);

INSERT INTO departments (dept_name)
VALUES ("Associate Services");

SELECT employees.id, employees.first_name, employees.last_name, roles.title, roles.salary, departments.dept_name, CONCAT(employees.first_name, ' ', employees.last_name) AS manager  
FROM employees 
LEFT JOIN roles ON role_id = roles.id
LEFT JOIN departments on roles.dept_id = departments.id
LEFT JOIN employees manager ON manager.id = employees.manager_id