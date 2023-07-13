const shapes = require('./shapes.js');

describe('Circle class', () => {
    test('new shape should apply the correct color', () => {
        const shapeColor = '#ff0000';
        const shape = new shapes.CircleLogo(shapeColor);
        expect(shape.generateSVG()).toContain(shapeColor);
    });
});

describe('square class', () => {
    test('new shape should apply the correct color', () => {
        const shapeColor = '#ff0000';
        const shape = new shapes.SquareLogo(shapeColor);
        expect(shape.generateSVG()).toContain(shapeColor);
    });
});

describe('Triangle class', () => {
    test('new shape should apply the correct color', () => {
        const shapeColor = '#ff0000';
        const shape = new shapes.TriangleLogo(shapeColor);
        expect(shape.generateSVG()).toContain(shapeColor);
    });
});