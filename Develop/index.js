// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Destructure the data
    const { title, description, installInstructions, usageInstrustions, contributionGuide, tests, githubUsername, email, license } = data;
    // set teh license for badges
        let licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
    // Write the data to the file
    fs.appendFile(fileName, 
        `# ${title} \n 
## Table of Contents \n
* [license](##license) \n
* [Description](##description) \n
* [Install Instructions](##instructions) \n
* [Usage Instructions](##usageinstructions) \n
* [Contribution Instructions](##contributioninstructions) \n
* [Tests](##tests) \n
## License \n ${licenseBadge} \n 
## Description \n ${description} \n
## Instructions \n ${installInstructions}\n
## Usage Instructions \n ${usageInstrustions} \n
## Contribution Guide \n ${contributionGuide} \n
## Tests \n ${tests} \n
## Questions \n
I am reachable through either of the methods listed below. Access my GitHub page to see my work, or email me at the address provided. 
\n* https://github.com/${githubUsername} \n* ${email}`, 
        (res, err) => {
        if (err) {
            console.log(err);
        }
    });
}

// TODO: Create a function to initialize app 
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "README Title: ",
        },
        {
            type: "input",
            name: "TableOfContents",
            message: "README Table of Contents: ",
        },
        {
            type: "input",
            name: "description",
            message: "README Description: ",
        },
        {
            type: "input",
            name: "installInstructions",
            message: "README Installation Instructions: ",
        },
        {
            type: "input",
            name: "usageInstructions",
            message: "README Usage Instructions: ",
        },
        {
            type: "input",
            name: "contributionGuide",
            message: "README Contribution Guide: ",
        },
        {
            type: "input",
            name: "tests",
            message: "README Tests: ",
        },
        {
            type: "input",
            name: "githubUsername",
            message: "README Github User Name: ",
        },
        {
            type: "input",
            name: "email",
            message: "README Email: ",
        },
        {
            type: "list",
            name: "license",
            message: "README License: ",
            choices: [
                "MIT"
            ]
        },
    ]).then( (data) => {
        const title = data.title;
        const TableOfContents = data.TableOfContents;
        const description = data.description;
        const installInstructions = data.installInstructions;
        const usageInstructions = data.usageInstructions;
        const contributionGuide = data.contributionGuide;
        const tests = data.tests;
        const githubUsername = data.githubUsername;
        const email = data.email;
        const license = data.license;
        writeToFile("README.md", data)
    });
}

// Function call to initialize app
init();
