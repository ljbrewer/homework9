// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
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
            message: "What is the link to the application?",
            name: "link",
        }
    ])}
    // TODO: Create a function to write README file
  
    const createREADME = (answers) =>
    `## Description\n
     ${answers.title}.\n Next item is?
     ${answers.motivation}.\n
     ${answers.why}.\n
     ${answers.issues}.\n
     ${answers.learn}.\n
     ${answers.standout}.\n
     ${answers.challenges}.\
     ${answers.newfeatures}.\n
     ${answers.link}.\n  
    
    ## Intallation  \nnode
    
    ## Usage   \n\n
    
    ## Credits \n\n
    
    ## Features\n\n
    
    ## How to Contribute \n\n
    
    ## Tests \n\n

### link to page:   https://ljbrewer.github.io/xxxxxx/


### Link to GitHub repository: https://github.com/ljbrewer/xxxx


### picture of Webpage:
![image of DayPlanner](./assets/images/xxxx.png)`;

// TODO: Create a function to initialize app
const init = ()=> {
    promptUser()
        .then((answers) => writeFileAsync('README.md', createREADME(answers)))
        .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
