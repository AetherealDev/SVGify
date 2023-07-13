// load the library
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes');

// map of color keywords to hex values
const colors = {
    red: '#ff0000',
    green: '#00ff00',
    blue: '#0000ff',
    yellow: '#ffff00',
    cyan: '#00ffff',
    magenta: '#ff00ff',
    white: '#ffffff',
    black: '#000000',
}

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

    switch (answers.shape) {
        case 'circle':
            // check if the color is a keyword
            if (colors[answers.shapeColor]) {
                answers.shapeColor = colors[answers.shapeColor];
            }
            // check if the color is a hex value
            else if (!answers.shapeColor.startsWith('#')) {
                answers.shapeColor = `#${answers.shapeColor}`;
            }
            // check if the color is a valid hex value
            else if (!answers.shapeColor.match(/^#[0-9A-F]{6}$/i)) {
                console.log('Invalid color');
                return;
            }
            const circleLogo = new shapes.CircleLogo(answers.shapeColor, answers.textColor, answers.logoText);
            const circleSVG = circleLogo.generateSVG();
            fs.writeFile(`${answers.logoText}.svg`, circleSVG, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            break;
        case 'triangle':
            // check if the color is a keyword
            if (colors[answers.shapeColor]) {
                answers.shapeColor = colors[answers.shapeColor];
            }
            // check if the color is a hex value
            else if (!answers.shapeColor.startsWith('#')) {
                answers.shapeColor = `#${answers.shapeColor}`;
            }
            // check if the color is a valid hex value
            else if (!answers.shapeColor.match(/^#[0-9A-F]{6}$/i)) {
                console.log('Invalid color');
                return;
            }
            const triangleLogo = new shapes.TriangleLogo(answers.shapeColor, answers.textColor, answers.logoText);
            const triangleSVG = triangleLogo.generateSVG();
            fs.writeFile(`${answers.logoText}.svg`, triangleSVG, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            break;
        case 'square':
            // check if the color is a keyword
            if (colors[answers.shapeColor]) {
                answers.shapeColor = colors[answers.shapeColor];
            }
            // check if the color is a hex value
            else if (!answers.shapeColor.startsWith('#')) {
                answers.shapeColor = `#${answers.shapeColor}`;
            }
            // check if the color is a valid hex value
            else if (!answers.shapeColor.match(/^#[0-9A-F]{6}$/i)) {
                console.log('Invalid color');
                return;
            }
            const squareLogo = new shapes.SquareLogo(answers.shapeColor, answers.textColor, answers.logoText);
            const squareSVG = squareLogo.generateSVG();
            fs.writeFile(`${answers.logoText}.svg`, squareSVG, (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
            });
            break;
        default:
            console.log('Invalid shape');
            break;
    }

  console.log(`Text: ${answers.logoText}`);
  console.log(`Text color: ${answers.textColor}`);
  console.log(`Shape: ${answers.shape}`);
  console.log(`Shape color: ${answers.shapeColor}`);
});

