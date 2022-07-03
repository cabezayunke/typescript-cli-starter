import inquirer, { Question } from 'inquirer';
import CustomQuestion from './CustomQuestion';

const QUESTION_NAME = 'customConfirmQuestion';
interface CustomQuestionPrompt {
  [QUESTION_NAME]: boolean;
}

export default class InquirerConfirm implements CustomQuestion {
  constructor(private message: string) {}

  async ask(): Promise<string | boolean> {
    const details = {
      type: 'confirm',
      name: QUESTION_NAME,
      message: this.message,
      choices: ['Yes', 'No'],
      default: false
    } as Question;
    const answers = await inquirer.prompt<CustomQuestionPrompt>([details] as Question[]);
    return answers['customConfirmQuestion'];
  }
}
