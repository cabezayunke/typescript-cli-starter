import { program } from 'commander';
import AutoUpgradeAction from './AutoUpgradeAction';

program
  .command('upgrade')
  .description('upgrade cli to the lastest version')
  .action(AutoUpgradeAction);
