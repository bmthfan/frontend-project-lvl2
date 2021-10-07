import fs from 'fs';
import yaml from 'js-yaml';
import path from 'path';

const parse = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '':
      return JSON.parse(data);
    case '.yml':
      return yaml.load(data);
    case '.yaml':
      return yaml.load(data);
    default:
      throw new Error('Not supported format');
  }
};

export default (filePath) => {
  const format = path.extname(filePath);
  const data = fs.readFileSync(filePath);

  return parse(data, format);
};
