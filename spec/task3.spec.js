const { removeChar } = require('../task3/task3');

test('Remove char', function() {
  expect(removeChar( 'WORLD' )).toBe('ORL');
  expect(removeChar( 'World' )).toBe('orl');
});
