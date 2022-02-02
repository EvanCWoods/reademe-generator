// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, installInstructions, usageInstrustions, constributionGuide } = data;
    fs.appendFile(fileName, 
        `# ${title} \n 
## Description \n ${description} \n
### Instructions \n ${installInstructions}\n
### Usage Instructions \n ${usageInstrustions} \n
### Contribution Guide \n ${constributionGuide}`, 
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
            name: "constributionGuide",
            message: "README Usage Instructions: ",
        },
    ]).then( (data) => {
        const title = data.title;
        const description = data.description;
        const installInstructions = data.installInstructions;
        const usageInstructions = data.usageInstructions;
        const constributionGuide = data.constributionGuide;
        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
