const { repeatStr } = require('../task4/task4');

test('Repeat string', function() {
  expect(repeatStr( 2, '*' )).toBe('**');
  expect(repeatStr( 6, 'S' )).toBe('SSSSSS');
});
