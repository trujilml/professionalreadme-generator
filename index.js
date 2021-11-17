// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {  
        //   project title is entered first and is required - shown as ${data.title} in generateMarkdown file
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
        // description of project is entered and is required - shown as ${data.description} in generateMarkdown file
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
        // table of contents is implemented already, presents data of added information and takes you to link with respective content - does not require data attachment (see generateMarkdown js file)
    {
        // installation of project - how would you install this project? description is required. ${data.installation} in generateMarkdown file
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
    },
    {
        // usage of project - basically, how do you use the project you created? Required input - ${data.usage} in generateMarkdown file 
        type: 'input',
        name: 'usage',
        message: 'How do you use your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true; 
            } else {
                console.log("Please enter the instructions on how you use the project.");
                return false; 
            }
        }
    },
    {
        //contributions - how would you want contributors on this project? Required input - ${data.contributions} on generateMarkdown file
        type: 'input',
        name: 'contributions',
        message: 'List whether you want other users to contribute on this project. (Required)',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please enter the instructions on how you would want contributions on this project.");
                return false;
            }
        }
    },
    {
        //testing - how would you test your project? Required input - ${data.test} on generateMarkdown file
        type: 'input',
        name: 'test',
        message: 'How do you test your project? (Required)',
        validate: testInput => {
            if (testInput){
                return true;
            } else {
                console.log("Please enter the instructions on how you would test your project.");
                return false;
            }
        }
    },
    {
        //license questions ${data.license} and ${license} respectively - will ask users on what license best suits their project and will elect their badge to appear on the readme file. they also have the option to not add it.
        type: 'list',
        name: 'license',
        message: 'What license fits with your project? Please choose one.',
        choices: ['None', 'Apache 2.0','APM','Eclipse','GitHub','MIT','Mozilla-Public','NPM'],
        validate: licenseSelection => {
            if (licenseSelection){
                return true;
            } else {
                console.log("Please choose a license for your project!");
                return false;
            }
        }
    },
    {
        //for the questions section, github username (which is attached to a link) and an email address is required. represented here is the github username - {data.github} in the generate markdown page
        type: 'input',
        name: 'github',
        message: 'For the questions section, contact information is required. Please enter your GitHub username.',
        validate: gitHubInput => {
            if (gitHubInput){
                return true;
            } else {
                console.log("Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        //represented is the email address - {data.email} in the generate markdown page
        type: 'input',
        name: 'email',
        message: 'For the questions section, contact information is required. Please enter your email address.',
        validate: emailInput => {
            if (emailInput){
                return true;
            } else {
                console.log("Please enter your email address.");
                return false;
            }
        }
    }
])
}

// TODO: Create a function to write README file 
const writeToFile = (data) => {
    fs.writeFile('./dist/sampleREADME.md', data, err => {
        if (err) 
            throw err;
           console.log("README file has been created!");
});
}

// TODO: Create a function to initialize app - put as a promise chain functionality instead
questions()
.then(data => {console.log('Done!'); return data})
    .then(data => {return generateMarkdown(data)})
        .then(writeReadme => {
            return writeToFile(writeReadme);
        })
        .catch(error => {console.log(error + "An error has popped up!")
    })