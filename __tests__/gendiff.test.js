import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

test('gendiff', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');
  const expected = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

  expect(gendiff(filepath1, filepath2)).toBe(expected);
});
