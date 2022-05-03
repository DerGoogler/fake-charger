/**
 * A class providing APIs to an interactive Unix shell.
 */
class Shell {
  private command: string;

  public constructor(command: string) {
    this.command = command;
  }

  public exec(): void {
    Android.exec(this.command);
  }

  public result(): string {
    return Android.execResult(this.command);
  }

  public static isAppGrantedRoot(): boolean {
    return Android.isAppGrantedRoot();
  }
}

export default Shell;
