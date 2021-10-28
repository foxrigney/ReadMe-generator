// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
// description, installation instructions, usage information, contribution guidelines, 
// and test instructions
//choose a license for my application from a list of options
//WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address


const questions = [
    {
        type: 'input',
        message: 'please enter project title',
        name: 'title',
    },
    {
        type: 'input',
        message: 'please enter project description',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Example',
        name: 'example',
    },
    {
        type: 'input',
        message: 'Tools',
        name: 'tools',
    },



];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log('Readme generated Successfully!')
    );

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log("user answers", response);

            //2. convert the response into a readme friendly format using generateMarkdown 
            const convertData = genMarkdown(response);
            console.log(convertData);
            //3. Write to a file 
             writeToFile("README.md",convertData)
        })
}

// Function call to initialize app
init();
