/* const sum = (a, b) => a + b;

test('sums two values', () => {
  expect(sum(2, 3)).toEqual(5);
}); */

const sum = require('./sum');

test('sums two values', () => {
  expect(sum(2, 3)).toBe(5);
});