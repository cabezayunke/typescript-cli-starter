export class RawCommandError extends Error {
  constructor(public readonly stdout: string, public readonly stderr: string) {
    super();
  }
}
