#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { Command } from '../node_modules/commander/esm.mjs';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format');

program.parse();
