import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

export default (filePath) => {
  const format = path.extname(filePath);
  const data = fs.readFileSync(filePath);
  let parse;

  if (format === '' || format === '.json') {
    parse = JSON.parse;
  } else if (format === '.yml' || format === '.yaml') {
    parse = yaml.load;
  }

  return parse(data);
};
