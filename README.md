# Professional README Generator 

![Professional README Generator Gif](demo/readmegenerator.gif)

## Description

This is a README Generator that generates a README.md file for your latest project!

Through the simple type of `node index.js` in your terminal, you will enter in a few things about your project and implement it into a professional README.md file. The command-line application easily accepts all required user input for creating your README file, including the option to implement a license feature with its respective badge. 

The first prompt will include the title of your project that is displayed as the title of the README file. This soon follows with the typed entries of your project description, its installation instructions, usage information, contribution guidelines, and test instructions. When entering the entries in your soon-to-be generated README file, it will organize your entries within sections in a generated Table of Contents and present them in that exact order. Within the generated Table of Contents, you are taken to the corresponding section of the README file that you want to land on. The license section is then presented and will allow the selection of the license the project is covered under as well as its respective badge. The license is an option that users can also opt out of if they have no license for their project (by selecting "None" in the checkbox prompt feature in the terminal). A Questions Section is then incorporated with the user's GitHub username and email address in the case contact is needed for them on a particular project. 

Once all entries for the README file are entered, it will generate the user's README file within the dist folder. From there, the user will have a high-quality README file perfect for their project. 

## Table of Contents
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Developed With](#Developed-with)

## Installation 
- Clone this file through GitHub (by Code option above)
- Ensure Node.js and npm is installed on your computer, alongside the Inquirer package from npm. 

## Usage 
- Open terminal of readme generator file through the Terminal application on Mac or through the Integrate Terminal on VS Code
- Type 'node index.js' 
- Follow and answer with the given prompts - all assets excluding the license and badge are required to fill out the README file. A 'None' option, when selected from the license prompt, will remove the license and badge option from your generated readme page.
- A README.md file will be generated when completing all the prompts - refer to the sampleREADME file in the demo folder of this repository for a generated example.

## Developed With 
- Node.js
- JavaScript 
- Inquirer package (viewable in package.json)

