import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import stylish from '../src/formatters/stylish';
import diffObj from '../src/modified';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expected = fs.readFileSync(getFixturePath('nested.txt'), 'utf-8');

test('stylish formatter', () => {
  expect(stylish(diffObj)).toEqual(expected);
});
