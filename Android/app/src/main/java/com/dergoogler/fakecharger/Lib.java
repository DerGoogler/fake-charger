package com.dergoogler.fakecharger;

public class Lib {
    static {
            System.loadLibrary("native-lib");
    }

    public static native String indexFile();

    public static native String interfaceName();
}
