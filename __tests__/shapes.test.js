const { Shape } = require('../shapes');

describe('Shape class', () => {
  let shape;

  beforeEach(() => {
    shape = new Shape('red');
  });

  test('should create a shape with the correct color', () => {
    expect(shape.color).toBe('red');
  });

  test('render method should return correct SVG with default dimensions', () => {
    const svg = shape.render('<circle />');
    expect(svg).toBe('<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><circle /></svg>');
  });

  test('render method should return correct SVG with custom dimensions', () => {
    const svg = shape.render('<circle />', 150, 150);
    expect(svg).toBe('<svg width="150" height="150" xmlns="http://www.w3.org/2000/svg"><circle /></svg>');
  });

  test('renderText method should return correct SVG text element', () => {
    const text = shape.renderText('ABC', 'white');
    expect(text).toBe('<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="25">ABC</text>');
  });
});
