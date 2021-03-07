use sql_employees;

INSERT INTO department (name)
VALUES 
    ('Marketing'),
    ('HR'),
    ('Finance')
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
    ('Sales Associate', 50000, 4),
    ('Business Analyst Lead', 65000, 3),
    ('Staff Accountant', 50000, 3),
    ('HR Manager', 100000, 2), 
    ('Marketing Intern', 45000, 1);

INSERT INTO employee (first_name, last_namem, role_id, manager_id)
VALUES
    ('Bob', 'Smith', 1, 2)
    ('Tom', 'Walker', 2, NULL)
    ('Billy', 'Jones', 3, 2)
    ('Sam', 'Parker', 4, NULL)
    ('Zoe', 'Griffin', 5, 4)
