// Packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// User questions array
const userQuestions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",

    // answer validation incase user does not enter in a valid answer
    // .trim removes both leading and trailing whitespaces from the user input answer
    validate: (titleInput) => {
      if (titleInput.trim() === " ") {
        return "Sorry, but you need to provide a title.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of the project.",

    validate: (descriptionInput) => {
      if (descriptionInput.trim() === " ") {
        return "Sorry, but you need to provide a description.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "table of contents",
    message: "Please provide a table of contents.",

    validate: (tableOfContents) => {
      if (tableOfContents.trim() === " ") {
        return "Sorry, but you need to provide a table of contents.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide an installation guide.",

    validate: (installationInput) => {
      if (installationInput.trim() === " ") {
        return "Sorry, but you need to provide an installation guide.";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide how the program is used.",

    validate: (usageInput) => {
      if (usageInput.trim() === " ") {
        return "Sorry, but you need to provide information on how the program is used.";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license to use for the project.",
    choices: ["apache", "mit", "agpl", "no license"],
  },
  {
    type: "confirm",
    name: "contributeConfirmation",
    message: "Allow for other developers to contribute?",
    default: "true",
  },
  {
    type: "input",
    name: "contribute",
    message:
      "Provide guidelines that a user contributing to the project must follow.",

    when: ({ contributeConfirmation }) => {
      if (contributeConfirmation) {
        return true;
      } else {
        return false;
      }
    },
    validate: (contributeInput) => {
      if (contributeInput.trim() === " ") {
        return "Sorry, you need to provide an input choice!";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Provide testing instructions.",

    validate: (testInput) => {
      if (testInput.trim() === " ") {
        return "Sorry, but you need to provide testing instructions!";
      } else {
        return true;
      }
    },
  },
];

const init = () => {
  return inquirer.prompt(userQuestions).then((readmeData) => {
    return readmeData;
  });
};

// inquirer.prompt(userQuestions).then((readmeData) => {
//   console.log("You have chosen to use the ${answers.license} license.");
// });

// Writing user input data to the file
const writeFile = (fileData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("README.md", fileData, process.argv[2], (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({
        okay: true,
        message: "File has been created!",
      });
    });
  });
};

// fs.readFile("README.md", "utf-8", (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// fs.writeFile("README.md", process.argv[2], (err) =>
//   err ? console.error(err) : console.log("Nice!")
// );

// Initialize app function call
init()
  .then((readmeData) => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
  })
  .then((pageMD) => {
    return writeFile(pageMD);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse.message);
  })
  .catch((error) => {
    console.log(error);
  });
