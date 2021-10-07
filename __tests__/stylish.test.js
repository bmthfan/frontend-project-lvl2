import fs from 'fs';
import path from 'path';
import stylish from '../src/formatters/stylish';
import diffObj from '../src/modified';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const expected = fs.readFileSync(getFixturePath('nested.txt'), 'utf-8');

test('stylish formatter', () => {
  expect(stylish(diffObj)).toEqual(expected);
});
