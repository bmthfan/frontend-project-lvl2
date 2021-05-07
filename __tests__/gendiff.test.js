import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const expected = `{
 - follow: false
   host: hexlet.io
 - proxy: 123.234.53.22
 - timeout: 50
 + timeout: 20
 + verbose: true
}`;

test('gendiff json', () => {
  const filepath1 = getFixturePath('file1.json');
  const filepath2 = getFixturePath('file2.json');

  expect(gendiff(filepath1, filepath2)).toBe(expected);
});

test('gendiff yml', () => {
  const filepath1 = getFixturePath('file1.yml');
  const filepath2 = getFixturePath('file2.yml');

  expect(gendiff(filepath1, filepath2)).toBe(expected);
});

test('gendiff yaml', () => {
  const filepath1 = getFixturePath('file1.yaml');
  const filepath2 = getFixturePath('file2.yaml');

  expect(gendiff(filepath1, filepath2)).toBe(expected);
});
