#!/usr/bin/env node
// eslint-disable-next-line import/extensions
import { Command } from '../node_modules/commander/esm.mjs';

const program = new Command();
program.version('0.0.1');

program
  .description('Compares two configuration files and shows a difference.');

program.parse();
