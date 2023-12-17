const generateShape = require('../../index');
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require('../shapes');
const fs = require('fs');
jest.mock('fs');

jest.mock('../shapes', () => ({
    Triangle: jest.fn().mockImplementation(() => ({
        render: jest.fn().mockReturnValue('mocked SVG content for Triangle'),
        writeSvgFile: jest.fn()
    })),
    Square: jest.fn().mockImplementation(() => ({
        render: jest.fn().mockReturnValue('mocked SVG content for Square'),
        writeSvgFile: jest.fn()
    })),
    Circle: jest.fn().mockImplementation(() => ({
        render: jest.fn().mockReturnValue('mocked SVG content for Circle'),
        writeSvgFile: jest.fn()
    }))
}));

describe('generateShape', () => {
    beforeEach(() => {
        Triangle.mockClear();
        Square.mockClear();
        Circle.mockClear();
    });

    it('should generate a square shape', async () => {
        const userInput = { shape: 'Square', color: 'blue', textColor: 'white' };
        inquirer.prompt = jest.fn().mockResolvedValue(userInput);
        await generateShape();
        expect(Square).toHaveBeenCalledWith(userInput.color);
    });

    it('should generate a circle shape', async () => {
        const userInput = { shape: 'Circle', color: 'green', textColor: 'yellow' };
        inquirer.prompt = jest.fn().mockResolvedValue(userInput);
        await generateShape();
        expect(Circle).toHaveBeenCalledWith(userInput.color);
    });

    it('should generate a triangle shape', async () => {
        const userInput = { shape: 'Triangle', color: 'red', textColor: 'black' };
        inquirer.prompt = jest.fn().mockResolvedValue(userInput);
        await generateShape();
        expect(Triangle).toHaveBeenCalledWith(userInput.color);
    });
});
