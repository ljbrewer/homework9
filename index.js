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
        },
       
    ])}
    // TODO: Create a function to write README file
  
    const createREADME = (answers) =>
    `## Description\n
    
    ### Title: ${answers.title}

    ### Motivation: ${answers.motivation}

    ### Why was this application created: ${answers.why}

    ### Issues: ${answers.issues}

    ### What was Learned: ${answers.learn}

    ### What Standsout in this program: ${answers.standout}

    ### Challenges that were faced: ${answers.challenges}

    ### New Features: ${answers.newfeatures}
        

### link to page:     ${answers.link}


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
