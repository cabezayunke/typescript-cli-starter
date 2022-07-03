import { Command, Option } from 'commander';
import { showMessage } from '../common/ui/messages';

const subcommand = new Command();

type HelloArgs = {
  name: string;
};

const saysHello = ({ name }: HelloArgs) => {
  showMessage(`Hello ${name || 'there'}`);
};

subcommand
  .command('hi')
  .description('says hello')
  .action(saysHello)
  .addOption(
    new Option('-n, --name <name>', 'Name to use for greetings').makeOptionMandatory(true)
  );

subcommand
  .command('hello')
  .description('says hello')
  .action(saysHello)
  .addOption(
    new Option('-n, --name <name>', 'Name to use for greetings').makeOptionMandatory(true)
  );
subcommand.parse(process.argv);

/**
 * Show help
 */
if (!process.argv.slice(2).length) {
  subcommand.helpInformation();
}
