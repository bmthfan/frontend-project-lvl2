#!/usr/bin/env node
import { Command } from '../node_modules/commander/esm.mjs';
import gendiff from '../src/gendiff.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => console.log(gendiff(filepath1, filepath2)));

program.parse();

export default program;
