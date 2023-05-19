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

  ## Description
  ${data["table of contents"]}
  
  ## Table of Contents
  ${data["table of contents"]}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.test}

  ${data.contributeConfirmation ? `## Contribution\n${data.contribute}` : ""}
    
    `;
}

module.exports = generateMarkdown;
