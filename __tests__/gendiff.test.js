import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yml');
const filepath4 = getFixturePath('file2.yml');
const filepath5 = getFixturePath('file1.yaml');
const filepath6 = getFixturePath('file2.yaml');

const expected = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

test('gendiff', () => {
  expect(gendiff(filepath1, filepath2)).toBe(expected);
  expect(gendiff(filepath3, filepath4)).toBe(expected);
  expect(gendiff(filepath5, filepath6)).toBe(expected);
});
