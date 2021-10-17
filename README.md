# team-profile-generator

## Project description 
The purpose of this project is to create a program that takes user input via Terminal or Git Bash and generates an HTML page populated with the information provided. Prompts to the user are tailored to creating a team profile page with individual cards for each employee and their respective information. 

## Steps to Use
- Clone repository onto your computer
- Using terminal or Git Bash to select the repository, execute the command 'npm install'
- Due to dependencies in package.json, inquirer and jest should download
- Once complete, run the command 'node index.js'
- Answer all prompted questions
- index.html should be generated in dist/ after all questions are answered
- Check folder for 'index.html' for your generated index with cards for each employee


## Code Snippet
- Using Jest, I was able to create a test for my Javascript classes in order to ensure that the class objects generated by the user's input contained the necessary fields in order to populate their respective HTML elements.

```Javascript
describe('Manager class', () => {
    const manager = new Manager('Snake', 'manager', '4', 'bigboss@mg3.com', '555-5555');

    describe('Manager name', () => {
        it('Has a name', () => {
            expect(manager.name).toBe('Snake')
        });
    });
    describe('Manager Role', () => {
        it('Has a role', () => {
            expect(manager.role).toBe('manager')
        });
    });
    describe('Manager ID', () => {
        it('Has an ID', () => {
            expect(manager.id).toBe('4')
        });
    });
    describe('Manager email', () => {
        it('Has an email', () => {
            expect(manager.email).toBe('bigboss@mg3.com')
        });
    });
    describe('Manager office number', () => {
        it('Has an office number', () => {
            expect(manager.office).toBe('555-5555')
        });
    });
});
```

## Steps

- First I downloaded Node.js
- Then I created the repository for the index generator
- Then I used npm init to create a package.json
- Then I installed inquirer and jest in order to use the writeFile function and establish tests
- Then I created tests for each class fo employee
- I created employee classes that were able to pass those tests
- I created templates for the HTML and employee cards, styled with a CSS page
- I created functions to prompt the user for the required information on each employee
- I created functions that used that data in order to generate an HTML page of the team profiles
- I created an instructional video to describe the process of installing and using the program

## Instructional Video

* [Video](https://watch.screencastify.com/v/wG2qRxJs9EXdpiNqEBjQ)

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.JS](https://nodejs.org/en/)
* [Inquirer](https://www.npmjs.com/package/inquirer)
* [Jest](https://jestjs.io/)


## Author
- Alonzo Roman
- [Link to Github](https://github.com/alonzofroman)
- [Link to LinkedIn](https://www.linkedin.com/)