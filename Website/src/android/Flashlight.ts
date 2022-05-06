import Shell from "../utils/Shell"

class Flashight {
    public static on() {
        new Shell(`flashlight 1`).exec();
    }

    public static off() {
        new Shell(`flashlight 0`).exec();
    }

    public static bang(count: string | undefined) {
        new Shell(`flashbang ${count}`).exec();
    }
}

export default Flashight