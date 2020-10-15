INSERT INTO departments (dept_name) VALUES ("Staff");
INSERT INTO departments (dept_name) VALUES ("Offence");
INSERT INTO departments (dept_name) VALUES ("Mid Field");
INSERT INTO departments (dept_name) VALUES ("Defence");

SELECT * FROM departments;

INSERT INTO roles (title, salary, dept_id) VALUES ("Head Coach", 300000, 4);
INSERT INTO roles (title, salary, dept_id) VALUES ("Forward", 180000, 5);
INSERT INTO roles (title, salary, dept_id) VALUES ("Wing", 170000 , 5);
INSERT INTO roles (title, salary, dept_id) VALUES ("Center Half", 140000, 6);
INSERT INTO roles (title, salary, dept_id) VALUES ("Side Half", 150000, 6);
INSERT INTO roles (title, salary, dept_id) VALUES ("Center Back", 130000, 7);
INSERT INTO roles (title, salary, dept_id) VALUES ("Side Back", 140000, 7);
INSERT INTO roles (title, salary, dept_id) VALUES ("Goal Keeper", 160000, 7);

SELECT * FROM roles;
SELECT * FROM employees;

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Jurgen", "Klopp", 8, null);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Roberto", "Firmino", 9, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Sadio", "Mane", 10, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Mohamed", "Salah", 10, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Thiago", "Alcantara", 11, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Naby", "Keita", 11,5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Jordan", "Henderson", 11, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Takumi", "Minamino", 12, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Virgil", "van Dijk", 13, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Joe", "Gomez", 13, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Trent", "Alexander-Arnold", 14, 5);
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("Andy", "Robertson", 14, 5);