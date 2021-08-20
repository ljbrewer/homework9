// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the Title of this Project",
        name: 'title',
    },
    {
        type: 'input',
        message: "Why is the Motivation for this Project?",
        name: 'motivation',
    },
    {
        type: 'input',
        message: "Why Build this Project?",
        name: 'why',
    },

    {
        type: "input",
        message: "What issues does it solve?",
        name: "issues",
    },
    {
        type: "input",
        message: "What did you learn from this Project?",
        name: "learn",
    },
    {
        type: "input",
        message: "How does it standout from other Projects?",
        name: "standout",
    },
    {
        type: "input",
        message: "What were the Challenges you faced?",
        name: "challenges",
    },
    {
        type: "input",
        message: "What new features do you plan for in the next release?",
        name: "newfeatures",
    },
    {
        type: "input",
        message: "What is the link to the video of the application?",
        name: "link",
    },
    {
        type: "list",
        message: "Please select License?",
        name: "license",
        choices:[
            "Apache",
            "Mit",
            "Boost",
            "BSD"
        ]
    },
    {
        type: "input",
        message: "Link to the GitHub repository:?",
        name: "github"
    },
    {
        type: "input",
        message: "picture of page:",
        name: "picture"
    }
]

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt(questions)
}
// TODO: Create a function to write README file

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();