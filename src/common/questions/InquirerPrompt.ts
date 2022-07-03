import inquirer, { Question } from 'inquirer';
import CustomQuestion from './CustomQuestion';

const QUESTION_NAME = 'genericQuestion';
interface CustomQuestionPrompt {
  [QUESTION_NAME]: string | boolean;
}

export default class InquirerPrompt implements CustomQuestion {
  constructor(private q: Question) {}

  async ask(): Promise<string | boolean> {
    const answers = await inquirer.prompt<CustomQuestionPrompt>([
      { ...this.q, name: QUESTION_NAME }
    ] as Question[]);
    return answers[QUESTION_NAME];
  }
}
