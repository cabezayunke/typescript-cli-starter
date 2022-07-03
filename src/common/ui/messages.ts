/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import figlet from 'figlet';
import chalk from 'chalk';

export const colors = {
  bold: chalk.bold,
  greenBold: chalk.green.bold,
  green: chalk.green,
  yellowBold: chalk.yellow.bold,
  cyanBright: chalk.cyanBright
};

export const showError = (message: string, exitCode?: number): void => {
  console.log(chalk.yellow(`\n${message}\n`));

  if (exitCode) {
    process.exit(exitCode);
  }
};

export const showMessage = (message: string): void => {
  console.log(message);
};

export const showSuccess = (message: string): void => {
  console.log(colors.green(message));
};

export const showTitle = (message: string): void => {
  console.log(figlet.textSync(message));
};

export const showInfo = (key: string, value: string): void => {
  console.log(`${colors.bold(key)} ${colors.greenBold(value)}`);
};
