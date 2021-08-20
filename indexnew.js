// TODO: Include packages needed for this application
const inquire=require(inquire)

// TODO: Create an array of questions for user input
const questions = [
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
