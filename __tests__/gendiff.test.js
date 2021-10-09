// import path from 'path';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import gendiff from '../src/diff-calc.js';
import diffData from '../__fixtures__/modified.js';
import parsers from '../src/parsers.js';

const formats = ['json', 'yml', 'yaml'];
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test.each(formats)('%s', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`);
  const filepath2 = getFixturePath(`file2.${format}`);
  const data1 = parsers(filepath1);
  const data2 = parsers(filepath2);
  const actual = gendiff(data1, data2);

  expect(actual).toEqual(diffData);
});
