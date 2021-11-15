// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {  type: 'input',
        name: 'title',
        message: 'Hello! Please enter your project name. (Required)',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the title to your project!");
                return false;
            }
        },


    }



    ])

// should generate the following (from readme guide) - take to markdown file but keep for question prompt reference
// project title (REQUIRED) ${data.title}
// description (REQUIRED) ${data.description}
// Table of contents - links should take you to the respective pages of the project (REQUIRED) ${data.tableofcontents}
// installation of project (REQUIRED) ${data.installation}
// usage of project (REQUIRED) ${data.usage}
//contributing addition (REQUIRED) ${data.contributions}
// tests/instruction example of project (REQUIRED) ${data.test}
// addition of license (REQUIRED) ${data.license}
        // badges for license to visually display (in generatemarkdown js)
//questions - added github username links to your github account and  added email address allowing those to contact you (REQUIRED)
//email ${data.email} 
//github ${data.github}")


}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
