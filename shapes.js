const fs = require('fs');

class Shape {
    constructor(color) {
        this.color = color;
    }

    render(content, width = 100, height = 100) { // Set default size for all shapes
        return `<svg width="${width}" height="${height}">${content}</svg>`;
    }
}

class Triangle extends Shape {
    render() {
        // Hard-coded points for an equilateral triangle centered in a 100x100 SVG
        const content = `<polygon points="50, 10 0,90 100,90" fill="${this.color}" />`;
        return super.render(content);
    }
}

class Square extends Shape {
    render() {
        // Use a consistent side length for the square
        const sideLength = 80; // Adjust as needed
        const content = `<rect x="10" y="10" width="${sideLength}" height="${sideLength}" fill="${this.color}" />`;
        return super.render(content);
    }
}

class Circle extends Shape {
    render() {
        // Set the radius to half of the square's side length
        const radius = 40; // Adjust as needed
        const content = `<circle cx="50" cy="50" r="${radius}" fill="${this.color}" />`;
        return super.render(content);
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

const myTriangle = new Triangle('blue');
const mySquare = new Square('red');
const myCircle = new Circle('green');

writeSvgFile('./examples/triangle.svg', myTriangle.render());
writeSvgFile('./examples/square.svg', mySquare.render());
writeSvgFile('./examples/circle.svg', myCircle.render());
