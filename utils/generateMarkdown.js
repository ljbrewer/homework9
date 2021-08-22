// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `[![License](https://img.shields.io/badge/License-${answers.license}-blue.svg)](https://opensource.org/licenses/Apache-2.0)


-----------------------------------------

## Table of Contents

* [Title](#Title:)
* [Motivation](#Motivation)
    * [Why this application what created](#Why-was-this-application-created)
    * [Issues](#Issues)
    * [What was Learned](#What-was-Learned)
    * [What Stands out in this program](#What-Stands-out-in-this-program)
    * [Challenges that were faced](#Challenges-that-were-faced)
    * [New Features](#New-Features)
* [link to video](#link-to-video)
* [License](#License)
* [Link to GitHub repository](#Link-to-GitHub-repository)
* [picture of page](#picture-of-page:)

-----------------------------------------

## Description\n
------------------------------    
### Title

${answers.title}

--------------------------------------------------------------------------------
### Motivation

${answers.motivation}

--------------------------------------------------------------------------------
### Why was this application created

${answers.why}

--------------------------------------------------------------------------------
### Issues 

${answers.issues}

--------------------------------------------------------------------------------
### What was Learned 

${answers.learn}

--------------------------------------------------------------------------------
### What Stands out in this program 

${answers.standout}

--------------------------------------------------------------------------------
### Challenges that were faced 

${answers.challenges}

--------------------------------------------------------------------------------
### New Features 

${answers.newfeatures}

--------------------------------------------------------------------------------
### link to video     

${answers.link}

--------------------------------------------------------------------------------
### License 

This application is covered under the: ${answers.license} license.

--------------------------------------------------------------------------------
### Link to GitHub repository 

${answers.github}

--------------------------------------------------------------------------------
### picture of page:

![image of Readme.md creation process](${answers.picture})

-------------------------------------------------------------------------------
#### Features of this program:

It runs from the command line and it prompts the user to answer questions about the readme file they need created.

-------------------------------------------------------------------------------
#### Tests: 

I tested it by running it from the command line many times.

--------------------------------------------------------------------------------
#### Credits: 

This program was created by Laura Brewer`;


}

module.exports = generateMarkdown;
