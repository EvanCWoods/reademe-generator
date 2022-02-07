// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge;
  let licenseCode;

  switch(license) {
    case "MIT":
      licenseCode = "MIT";
      break;
    case "Apache-2.0":
      licenseCode = "Apache_2.0";
      break;
    case "MPL-2.0":
      licenseCode = "MPL_2.0"
      break;
  }

  if (license) {
    licenseBadge = `[![License: ${license}](https://img.shields.io/badge/License-${licenseCode}-yellow.svg)](https://opensource.org/licenses/${license})`;
  } else {
    licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  if (license) {
    licenseLink = `https://opensource.org/licenses/${license}`;
  } else {
    licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  if (license) {
    return `
${licenseBadge}

${licenseLink}
`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseSection(data.license);
  return `# ${data.title}


## License
${license}


## Table of Contents
* [Description](#description) 
* [Installation Instructions](#installation)
* [Usage Instructions](#usage)
* [Contribution Guide](#contribute)
* [Tests](#tests)
* [Questions](#questions)


## Description
${data.description}


## Installation
    ${data.installInstructions}


## Usage
${data.usageInstructions}


## Contribute
${data.contributionGuide}


## Tests
${data.tests}


## Questions

* https://github.com/${data.githubUsername}
* ${data.email}
`;
}

module.exports = generateMarkdown; 
