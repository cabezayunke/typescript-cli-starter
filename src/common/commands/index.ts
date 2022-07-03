import { exec, ExecOptions } from 'child_process';
import { RawCommandError } from './RawCommandError';

const defaultOpts = {
  cwd: './'
};

export const runCommand = async (
  command: string,
  opts?: ExecOptions
): Promise<string> => {
  return new Promise((resolve, reject) => {
    exec(command, { ...defaultOpts, ...opts }, (err, stdout, stderr) => {
      if (err) {
        console.error(stderr.toString());
        reject(new RawCommandError(stdout, stderr));
      }
      resolve(stdout.toString());
    });
  });
};
