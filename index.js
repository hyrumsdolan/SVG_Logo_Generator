const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./utils/shapes.js");

async function generateShape() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "acronym",
      message: "Enter your business name acronym (3 letters or less):",
      validate: (value) => {
        if (value.length > 3) {
          return "Please enter an acronym with 3 letters or less.";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter the text color (color name or #hex):",
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["Triangle", "Square", "Circle"],
    },
    {
      type: "input",
      name: "color",
      message: "Enter the color for the shape (color name or #hex):",
    },
  ]);

  let shape;
  switch (answers.shape) {
    case "Triangle":
      shape = new Triangle(answers.color);
      break;
    case "Square":
      shape = new Square(answers.color);
      break;
    case "Circle":
      shape = new Circle(answers.color);
      break;
  }

  if (shape) {
    const content = shape.render(answers.acronym, answers.textColor);
    const filename = `./examples/${answers.acronym}.svg`;
    shape.writeSvgFile(filename, content);
  } else {
    console.error("Invalid shape type");
  }
}


if (require.main === module) {
  generateShape();
}

module.exports = generateShape;
