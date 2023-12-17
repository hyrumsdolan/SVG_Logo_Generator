const fs = require("fs");

class Shape {
  constructor(color) {
    this.color = color;
  }

  render(content, width = 100, height = 100) {
    return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
  }

  renderText(acronym, textColor, yPosition = "50%") {
    return `<text x="50%" y="${yPosition}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="25">${acronym}</text>`;
  }

  writeSvgFile(filename, content) {
    fs.writeFile(filename, content, (err) => {
      if (err) {
        console.error(`Error writing the file: ${filename}`, err);
      } else {
        console.log(`SVG file ${filename} saved successfully.`);
      }
    });
  }
}

class Triangle extends Shape {
  render(acronym, textColor) {
    const content = `<polygon points="50, 10 0,90 100,90" fill="${this.color}" />`;
    const text = this.renderText(acronym, textColor, "62%");
    return super.render(content + text);
  }
}

class Square extends Shape {
  render(acronym, textColor) {
    const content = `<rect x="10" y="10" width="80" height="80" fill="${this.color}" />`;
    const text = this.renderText(acronym, textColor);
    return super.render(content + text);
  }
}

class Circle extends Shape {
  render(acronym, textColor) {
    const content = `<circle cx="50" cy="50" r="40" fill="${this.color}" />`;
    const text = this.renderText(acronym, textColor);
    return super.render(content + text);
  }
}

function writeSvgFile(filename, content) {
  fs.writeFile(filename, content, (err) => {
    if (err) {
      console.error(`Error writing the file: ${filename}`, err);
    } else {
      console.log(`SVG file ${filename} saved successfully.`);
    }
  });
}

module.exports = { Shape, Triangle, Square, Circle };

// lines were used to test the code.
// const myTriangle = new Triangle('blue');
// const mySquare = new Square('red');
// const myCircle = new Circle('green');

// const acronym = 'SVG';
// const textColor = 'white';

// writeSvgFile('./examples/triangle.svg', myTriangle.render(acronym, textColor));
// writeSvgFile('./examples/square.svg', mySquare.render(acronym, textColor));
// writeSvgFile('./examples/circle.svg', myCircle.render(acronym, textColor));
