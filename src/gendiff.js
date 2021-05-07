import _ from 'lodash';
import parsers from './parsers.js';

export default (filepath1, filepath2) => {
  const data1 = parsers(filepath1);
  const data2 = parsers(filepath2);
  const keys1 = _.keys(data1);
  const keys2 = _.keys(data2);
  const keys = _.union(keys1, keys2).sort();
  const result = [];
  let stack;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of keys) {
    stack = [];
    if (!_.has(data1, key)) {
      stack.push(' +');
      stack.push(`${key}:`);
      stack.push(data2[key]);
      result.push(stack.join(' '));
    } else if (!_.has(data2, key)) {
      stack.push(' -');
      stack.push(`${key}:`);
      stack.push(data1[key]);
      result.push(stack.join(' '));
    } else if (data1[key] !== data2[key]) {
      stack.push(' -');
      stack.push(`${key}:`);
      stack.push(data1[key]);
      result.push(stack.join(' '));
      stack = [];
      stack.push(' +');
      stack.push(`${key}:`);
      stack.push(data2[key]);
      result.push(stack.join(' '));
    } else {
      stack.push('  ');
      stack.push(`${key}:`);
      stack.push(data1[key]);
      result.push(stack.join(' '));
    }
  }

  return `{\n${result.join('\n')}\n}`;
};
