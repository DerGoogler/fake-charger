import Shell from "../utils/Shell"

class Vibrator {
    public static samsung(value: string | undefined): void {
        new Shell(`samsungVibrate ${value}`).exec();

    }
    public static aosp(value: string | undefined): void {
        new Shell(`aospVibrate ${value}`).exec();
    }

    public static samsungCancel(): void {
        new Shell(`samsungVibrateCancel`).exec();

    }
    public static aospCancel(): void {
        new Shell(`aospVibrateCancel`).exec();
    }
}

export default Vibrator