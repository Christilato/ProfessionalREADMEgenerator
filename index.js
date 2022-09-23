// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ("fs");
const path = require("path");
const genMkd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Write a short description of your project',
        name: 'description',
      },
      {
          type: 'input',
          message: 'What installation instructions are there?',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'What is the usage information?',
          name: 'usage',
        },
        {
            type: 'list',
            message: 'What kind of license were used?',
            name: 'license',
            choices: ["MIT", "Apache2.0", "GPL3.0", "BSD3", "none"],
          },
          {
            type: 'input',
            message: 'What are the contribution guidelines',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'What are the test instructions?',
            name: 'test',
          },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("generating readme");
    writeToFile("README.md", genMkd({...inquirerResponses}));
});
}

// Function call to initialize app
init();
