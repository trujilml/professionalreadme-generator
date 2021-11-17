// TODO: Create a function that returns a license badge based on which license is passed in - will be placed within either this doc or index.js
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

// or make below a const followed by an arrow function 


function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Test](#Test)
  - [License](#License)
  - [Questions](#Questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contributions}

  ## Test
  ${data.test}

  ## License
  ${renderLicenseBadge(data.license)}
  
  This application is covered by the ${data.license} license.


  ## Questions
  If you have any questions regarding this project, feel free to reach out to the GitHub and/or email below:

  - GitHub: ("https://github.com/${data.github}")
  - Email address: ${data.email}

`;
}

module.exports = generateMarkdown;
