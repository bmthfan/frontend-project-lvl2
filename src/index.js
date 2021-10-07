import { Command } from '../node_modules/commander/esm.mjs';
import gendiff from './diff-calc.js';
import stylish from './formatters/stylish.js';
import parsers from './parsers.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    const { format } = program.opts();
    const data1 = parsers(filepath1);
    const data2 = parsers(filepath2);
    const diff = gendiff(data1, data2);

    switch (format) {
      case 'stylish':
        return console.log(stylish(diff));
      default:
        throw new Error('Not supported output format');
    }
  });

program.parse();

export default () => program;
