import Shell from "../utils/Shell"

class Battery {
    public static set(value: string | undefined): void {
        new Shell(`setBattery ${value}`).exec();
    }

    public static unplug(): void {
        new Shell(`unplugBattery`).exec();
    }

    public static reset(): void {
        new Shell(`resetBattery`).exec();
    }

    public static get getLevel(): string {
        const result: string = new Shell("dumpsys battery | grep level").result();
        return result.replace(/level:\s(.*?)/gm, "");
    }

}

export default Battery