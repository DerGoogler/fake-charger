package com.dergoogler.fakecharger;

public class Lib {
    static {
            System.loadLibrary("native-lib");
    }

    public static native void exec(String command);

    public static native void requestRoot();

    public static native String indexFile();

    public static native String interfaceName();

    public static native String sdfsdvvcx();

    public static native String execResult(String command);

    public static native String test();
}
