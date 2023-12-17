const inquirer = require('inquirer');
const fs = require('fs');

const { Triangle, Square, Circle } = require('./shapes');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'acronym',
            message: 'Enter your brand acronym (up to 3 letters):',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter your prefered text color:',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape would you like to draw?',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color should the shape be?',
        },
    ])
    .then((answers) => {
        let shape;
        switch (answers.shape) {
            case 'Triangle':
                shape = new Triangle(answers.color);
                break;
            case 'Square':
                shape = new Square(answers.color);
                break;
            case 'Circle':
                shape = new Circle(answers.color);
                break;
        }
        const content = shape.render();
        const filename = `./examples/${answers.acronym}.svg`;
        fs.writeFile(filename, content, (err) => {
            if (err) {
                console.error(`Error writing the file: ${filename}`, err);
            } else {
                console.log(`SVG file ${filename} saved successfully.`);
            }
        });
    })
    .catch((error) => {
        console.error(error);
    });


