import { runCommand } from '../common/commands';
import { showError, showMessage } from '../common/ui/messages';
import env from './env';

export default async (): Promise<void> => {
  if (!env.CLI_LOCAL_PATH) {
    showError('Configure CLI_LOCAL_PATH in your .env file please', 1);
  }
  const cliVersion = await import(`${env.CLI_LOCAL_PATH}/package.json`).then(
    ({ version }) => version as string
  );

  const commit = await runCommand('git rev-parse --short HEAD', {
    cwd: env.CLI_LOCAL_PATH
  });
  showMessage(`${cliVersion} (${commit.trim()})`);
};
