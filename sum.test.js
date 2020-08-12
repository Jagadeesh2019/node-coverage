const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});


test('adds 10 + 20 to equal 3', () => {
    expect(sum(10, 20)).toBe(30);
});


test('adds -10 + 40 to equal 3', () => {
    expect(sum(-10, 40)).toBe(30);
});