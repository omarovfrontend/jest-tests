const  { positiveSum } = require('../task1/task1');

test('Sum of positive', function() {
  expect(positiveSum( [1, 2, 3, 4, 5] )).toBe(15);
  expect(positiveSum( [] )).toBe(0);
  expect(positiveSum( [-1,-7,-9] )).toBe(0);
});
