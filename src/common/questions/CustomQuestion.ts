export default interface Question {
  ask(): Promise<string | boolean>;
}
