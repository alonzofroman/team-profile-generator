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
        
    }).then(console.log(employeeTeam))
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
            init();
        }
        else {
            generateHtml();
        }
    })
}


init();

function generateHtml() {
    console.log('stage');
}