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

function init() {
    inquirer.prompt(questions)
    .then(data => {
        // console.log(data);
        if (data.role === 'Engineer') {
            inquirer.prompt([{
                type: 'input',
                name: 'office',
                message: 'What is the employee office number?'
            }]).then(data => {console.log(data)})
        }
        
        else if (data.role === 'Intern') {
            inquirer.prompt([{
                type: 'input',
                name: 'school',
                message: 'What is the employee school name?'
            }]).then(data => {console.log(data)})
        }
        
        
        else if (data.role === 'Manager') {
            inquirer.prompt([{
                type: 'input',
                name: 'office',
                message: 'What is the employee office phone number?'
            }]).then(data => {console.log(data)})
        }
        
    })
}

init();