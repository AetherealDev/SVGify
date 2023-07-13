// load the library
const inquirer = require('inquirer');

// the questions to present to the user
const questions = [
  {
    type: 'input',
    name: 'logoText',
    message: 'Please enter the logo text:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Please enter the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter the shape color:',
  },
];

// use inquirer to ask the questions
inquirer.prompt(questions).then((answers) => {
  // print the answers
  console.log('\nOrder receipt:');
  console.log(`Text: ${answers.logoText}`);
  console.log(`Text color: ${answers.textColor}`);
  console.log(`Shape: ${answers.shape}`);
  console.log(`Shape color: ${answers.shapeColor}`);
});
