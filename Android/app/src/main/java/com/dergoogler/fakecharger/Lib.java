package com.dergoogler.fakecharger;

public class Lib {
    static {
            System.loadLibrary("native-lib");
    }

    public static native Void exec(String command);

    public static native String test();
}
