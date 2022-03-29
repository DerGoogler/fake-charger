package com.dergoogler.fakecharger;

public class Lib {
    static {
        System.loadLibrary("native-lib");
    }

    public native static void setBattery(String level);

    public native static void requestRoot();

    public native static void exec(String command);
}
