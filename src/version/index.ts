import { program } from 'commander';
import CheckVersionAction from './CheckVersionAction';

// Proxy frontends
program
  .command('version')
  .description('check current version')
  .action(CheckVersionAction);
