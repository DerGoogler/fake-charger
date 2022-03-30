/**
 * A class providing APIs to an interactive Unix shell.
 */
class cmd {
  private command: string;

  public constructor(command: string) {
    this.command = command;
  }

  public exec(): void {
    Android.cmd(this.command);
  }

  public result(): string {
    return Android.cmdResult(this.command);
  }
}

export default cmd;
