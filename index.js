// Load required libraries
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// Create questions for employees
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee ID?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee email?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee role?',
        choices: ['Engineer', 'Intern', 'Manager']
    }
];

//Create array for all employees
const employeeTeam = [];

//Function to receive informtation on employees
function init() {
    inquirer.prompt(questions)
    .then(data => {
        // console.log(data);
        if (data.role === 'Engineer') {
            inquirer.prompt([{
                type: 'input',
                name: 'github',
                message: 'What is the employee Github username?'
            }]).then(response => {
                // console.log(response); console.log(data);
                let newEmployee = new Engineer(data.name, data.role, data.id, data.email, response.github);
                employeeTeam.push(newEmployee);
                anotherMember();
            }) 
        }
        
        else if (data.role === 'Intern') {
            inquirer.prompt([{
                type: 'input',
                name: 'school',
                message: 'What is the employee school name?'
            }]).then(response => {
                // console.log(response); console.log(data);
                let newEmployee = new Intern(data.name, data.role, data.id, data.email, response.school);
                employeeTeam.push(newEmployee);
                anotherMember();
            }) 
        }
        
        
        else if (data.role === 'Manager') {
            inquirer.prompt([{
                type: 'input',
                name: 'office',
                message: 'What is the employee office phone number?'
            }]).then(response => {
                // console.log(response); console.log(data)
                let newEmployee = new Manager(data.name, data.role, data.id, data.email, response.office);
                employeeTeam.push(newEmployee);
                anotherMember();
            }) 
        }
        
    })
}

//Call for another team member
function anotherMember() {
    inquirer.prompt([{
        type: 'list',
        name: 'newEmployee',
        message: 'Would you like to add another employee?',
        choices: ['yes', 'no']
    }]).then(extraMember => {
        if (extraMember.newEmployee === 'yes') {
            // console.log('press up arrow to continue');
            init();
        }
        else {
            generateHtml();
        }
    })
}

// Start everything
init();

//Constants for html template
const indexTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/style.css">
    <title>Team Profiles</title>
</head>
<body>
    
<header class="header">
    <h1>My Team</h1>
</header>

<main>
<div class="employees">

`

const endIndex = `
</div>

</main>

</body>
</html>
`

// Manager template
function managerTemplate() {
    return `
    <div class="member-card"> 
            <div class="card-header">
                <h3 class="member-name">${employeeTeam[i].name}</h3>
                <h3 class="member-role">Manager</h3>
            </div>
            <div class="card-body">
                <p class="member-id">ID: ${employeeTeam[i].id}</p>
                <p class="member-email">Email: <a href="mailto:${employeeTeam[i].email}">${employeeTeam[i].email}</a></p>
                <p class="member-cred">Office Number: ${employeeTeam[i].office}</p>
            </div>
        </div>
    `
} 

// Engineer template
function engineerTemplate() {
    return `
    <div class="member-card"> 
            <div class="card-header">
                <h3 class="member-name">${employeeTeam[i].name}</h3>
                <h3 class="member-role">Engineer</h3>
            </div>
            <div class="card-body">
                <p class="member-id">ID: ${employeeTeam[i].id}</p>
                <p class="member-email">Email: <a href="mailto:${employeeTeam[i].email}">${employeeTeam[i].email}</a></p>
                <p class="member-cred">Github: <a target="_blank" href="https://github.com/${employeeTeam[i].github}">${employeeTeam[i].github}</a></p>
            </div>
        </div>
    `
} 

// Intern template
function internTemplate() {
    return `
    <div class="member-card"> 
            <div class="card-header">
                <h3 class="member-name">${employeeTeam[i].name}</h3>
                <h3 class="member-role">Intern</h3>
            </div>
            <div class="card-body">
                <p class="member-id">ID: ${employeeTeam[i].id}</p>
                <p class="member-email">Email: <a href="mailto:${employeeTeam[i].email}">${employeeTeam[i].email}</a></p>
                <p class="member-cred">School: ${employeeTeam[i].school}</p>
            </div>
        </div>
    `
}  


// Function to write html page
function generateHtml() {
    fs.writeFile('./dist/index.html', indexTemplate, function(err) {
        if (err) {
            throw err;
        }
    })
    // console.log(employeeTeam);
    for (i=0; i<employeeTeam.length; i++) {
        if (employeeTeam[i].role == 'Manager') {
            fs.appendFile('./dist/index.html', managerTemplate(employeeTeam[i]), function(err) {
                if (err) {
                    throw err;
                }
            })
        }
        else if (employeeTeam[i].role == 'Engineer') {
            fs.appendFile('./dist/index.html', engineerTemplate(employeeTeam[i]), function(err) {
                if (err) {
                    throw err;
                }
            })
        }
        else if (employeeTeam[i].role == 'Intern') {
            fs.appendFile('./dist/index.html', internTemplate(employeeTeam[i]), function(err) {
                if (err) {
                    throw err;
                }
            })
        }
        else {console.log('Members not grabbed')};
    };
    fs.appendFile('./dist/index.html', endIndex, function(err) {
        if (err) {
            throw err;
        }

    })
    console.log('Generated Html');
}