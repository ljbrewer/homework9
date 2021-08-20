// TODO: Include packages needed for this application
// const generateMarkdown = require("./generateMarkdown.js")
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// TODO: Create an array of questions for user input
var questions = [
    { message: "What is the Title of this Project?", type: "input", name: "title" },
    { message: "Please provide a description of this Project use the following question as your guide", type: "input", name: "description" },
    { message: "Why is the Motivation for this Project?", type: "input", name: "motivation" },
    { message: "Why Build this Project?", type: "input", name: "why" },
    { message: "What issues does it solve?", input: "input", name: "issues" },
    { message: "What did you learn from this Project?", type: "input", name: "learn" },
    { message: "How does it standout from othe Projects?", type: "input", name: "standout" },
    { message: "What were the Challenges you faced?", type: "input", name: "challenges" },
    { message: "What new features you plan for the next release?", type: "input", name: "newfeatures" },
    { message: "What is the link to the application?", type: "input", name: "link" }
];



const promptUser = () => {
   inquirer.prompt(questions).then((answers) =>{
    var title=answers.title;
    var name=answers.name;
    var motivation=answers.motivation;
    var why=answers.why;
    var issues=answers.issues;
    var learn=answers.learn;
    var standout=answers.standout;
    var challenges=answers.challenges;
    var newfeatures=answers.newfeatures;
    var link=answers.link;
    var output=
           `## Description\n
    
    ### Title: ${title}

    ### Motivation: ${motivation}

    ### Why was this application created: ${why}

    ### Issues: ${issues}

    ### What was Learned: ${learn}

    ### What Standsout in this program: ${standout}

    ### Challenges that were faced: ${challenges}

    ### New Features: ${newfeatures}
        

    ### link to page:${link}


    ### Link to GitHub repository: https://github.com/ljbrewer/homework9

    ### Video of Webpage:
        ![video of Webpage](https://drive.google.com/file/d/1hADcxXdOSzD55vTutuq4YrDjbL2xFnCt/view)`;

   } )
  

   }
 
   // TODO: Create a function to write README file
  
    const writeFileAsync = util.promisify(fs.writeFile);
    const createREADME = (answers.output);
// TODO: Create a function to initialize app
    const init = ()=> {
      promptUser()
        .then((answers) => writeFileAsync('README.md', createREADME(answers.output)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
