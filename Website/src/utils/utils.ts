import Shell from "./Shell";

class utils {
  public static get getBatteryLevel(): string {
    const result: string = new Shell("dumpsys battery | grep level").result();
    return result.replace(/level:\s(.*?)/gm, "");
  }
}

export default utils;
