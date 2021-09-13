import path from 'path';
import gendiff from '../src/gendiff.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const filepath1 = getFixturePath('file1.json');
const filepath2 = getFixturePath('file2.json');
const filepath3 = getFixturePath('file1.yml');
const filepath4 = getFixturePath('file2.yml');
const filepath5 = getFixturePath('file1.yaml');
const filepath6 = getFixturePath('file2.yaml');

const expected = `
{
  common: {
    + follow: false
      setting1: Value 1
    - setting2: 200
    - setting3: true
    + setting3: null
    + setting4: blah blah
    + setting5: {
          key5: value5
      }
      setting6: {
          doge: {
            - wow: 
            + wow: so much
          }
          key: value
        + ops: vops
      }
  }
  group1: {
    - baz: bas
    + baz: bars
      foo: bar
    - nest: {
          key: value
      }
    + nest: str
  }
- group2: {
      abc: 12345
      deep: {
          id: 45
      }
  }
+ group3: {
      deep: {
          id: {
              number: 45
          }
      }
      fee: 100500
  }
}
`;

test('gendiff json', () => {
  expect(gendiff(filepath1, filepath2)).toBe(expected);
});

test('gendiff yml', () => {
  expect(gendiff(filepath3, filepath4)).toBe(expected);
});

test('gendiff yaml', () => {
  expect(gendiff(filepath5, filepath6)).toBe(expected);
});
