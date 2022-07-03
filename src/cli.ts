#!/usr/bin/env node
import { program } from 'commander';
import * as dotenv from 'dotenv';
import { showError } from './common/ui/messages';

const envOutput = dotenv.config({ path: __dirname + '/../.env' });
if (envOutput.error) {
  showError(JSON.stringify(envOutput.error, null, 2));
  showError('Error loading your .env', 1);
}

// commands with single command
import './upgrade';
import './version';

// commands with subcommands
program.description('CLI tool');
program
  .command('example', 'Your example command here', {
    executableFile: './example/index'
  })
  .alias('greetings');

/**
 * Show help
 */
if (!process.argv.slice(2).length) {
  program.help();
}

/**
 * Parse args
 */
program.parse(process.argv);
