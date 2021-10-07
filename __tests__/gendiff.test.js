import path from 'path';
import gendiff from '../src/diff-calc.js';
import keys from '../src/modified';
import parsers from '../src/parsers.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yml');
const filepath4 = getFixturePath('file2.yml');
const filepath5 = getFixturePath('file1.yaml');
const filepath6 = getFixturePath('file2.yaml');

const data1 = parsers(filepath1);
const data2 = parsers(filepath2);
const data3 = parsers(filepath3);
const data4 = parsers(filepath4);
const data5 = parsers(filepath5);
const data6 = parsers(filepath6);

test('gendiff json', () => {
  expect(gendiff(data1, data2)).toEqual(keys);
});

test('gendiff yml', () => {
  expect(gendiff(data3, data4)).toEqual(keys);
});

test('gendiff yaml', () => {
  expect(gendiff(data5, data6)).toEqual(keys);
});
