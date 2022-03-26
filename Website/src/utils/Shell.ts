const a = window.android;

class Shell {
  public static cmd(command: string): void {
    a.cmd(command);
  }

  public static result(command: string): string {
    return a.cmdResult(command);
  }

  public static rootAccess(): boolean {
    return a.rootAccess();
  }

  public static get getBatteryLevel(): string {
    const result: string = Shell.result("dumpsys battery | grep level");
    return result.replace(/level:\s(.*?)/gm, "");
  }
}

export default Shell;
