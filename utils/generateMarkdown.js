// function to return license badge
function renderLicenseBadge(license) {
  if (license !== "no license") {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return " ";
  }
}

// function to return a license link
function renderLicenseLink(license) {
  if (license !== "no license") {
    return `[${license}](https://choosealicense.com/licenses/${license})`;
  } else {
    return " ";
  }
}

// function to return the license section of README file
function renderLicenseSection(license) {
  if (license !== "no license") {
    return `
    
    The application is covered under the following license:
    
    ${renderLicenseLink(license)}`;
  } else {
    return " ";
  }
}

// function to generate README markdown
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ${renderLicenseSection(data.license)}

  ## Description
  ${data.description}


  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licesnse](#license)
  - [Tests](#tests)
  ${data.contributeConfirmation ? `- [Contribution](#contribution)` : ""}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}
  

  ${data.contributeConfirmation ? `## Contribution\n${data.contribute}` : ""}

  ## Questions
  For any questions, please reach out to me on [GitHub](https://github.com/${
    data.github
  }) or
  email me at ${data.email}.
    
    `;
}

module.exports = generateMarkdown;
