package com.dergoogler.fakecharger;

import com.topjohnwu.superuser.Shell;
import com.topjohnwu.superuser.ShellUtils;

public class Utils {
    public static String modulePath ="/data/adb/modules/fake-shell-android-charger";

    public static void downloadFile(String url, String name) {
        Shell.cmd("curl " + url + "  --output /data/local/tmp/" + name);
    }

    public static String cmdResult(String command) {
        return ShellUtils.fastCmd(Shell.getShell(), command);
    }

    public static String getProp(String name) {
        return Utils.cmdResult("sed -n \"s|^" + name + "=||p\" ${2:-" + modulePath + "/module.prop};");
    }

    public static void installModule(String path) {
        Shell.cmd("magisk --install-module " + path).exec();
    }
}