const { opposite } = require('../task2/task2');

test('Opposite number', function() {
  expect(opposite( 1 )).toBe(-1);
  expect(opposite( -1 )).toBe(1);
});
