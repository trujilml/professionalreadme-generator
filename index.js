// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {  
        //   project title is entered first
        type: 'input',
        name: 'title',
        message: 'Hello! Please enter your project name. (Required)', 
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log("Please enter the title to your project!");
                return false;
            }
            }
        },

    {
        // description of project is entered
        type: 'input',
        name: 'description',
        message: 'Now, can you please a provide a description of your project? (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please enter a description for your project!");
                return false;
            }
        }
    },
        // table of contents will be required, must be implemented
    {
        // installation of project - how would you install this project
        type: 'input',
        name: 'installation',
        message: 'How would you install your project? (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please enter the instructions on how you would install your project.");
                return false;
            }
        }
    }



])
}

    



   

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



// TODO: Create a function to write README file 
const writeToFile = (data) => {
    fs.writeFile('./dist/readme.md', data, err => {
        if (err) 
            throw err;
           console.log("README file has been created!");
});
}

// TODO: Create a function to initialize app - put as a promise chain functionality
questions()
.then(data => {console.log('Done!'); return data})
    .then(data => {return generateMarkdown(data)})
        .then(writeReadme => {
            return writeToFile(writeReadme);
        })
        .catch(error => {console.log(error + "Whoops! An error has popped up in your code!")
    })