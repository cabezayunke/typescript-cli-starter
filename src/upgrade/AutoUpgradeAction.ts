import { runCommand } from '../common/commands';
import { showError, showSuccess } from '../common/ui/messages';
import env from './env';

export default async (): Promise<void> => {
  console.log('Upgrading cli');
  if (!env.CLI_LOCAL_PATH) {
    showError('Configure CLI_LOCAL_PATH in your env file please', 1);
  }
  const opts = { cwd: env.CLI_LOCAL_PATH };
  await runCommand('git checkout main', opts);
  await runCommand('git pull', opts);
  await runCommand('npm run install-cli', {
    cwd: env.CLI_LOCAL_PATH
  });
  showSuccess('You cli has been upgraded to latest main branch commit');
};
