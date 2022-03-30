package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.Application;
import android.content.Context;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.annotation.NonNull;
import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;

import com.topjohnwu.superuser.BusyBoxInstaller;
import com.topjohnwu.superuser.Shell;
import com.topjohnwu.superuser.ShellUtils;
import com.topjohnwu.superuser.io.SuFile;

import java.io.InputStream;
import java.util.concurrent.ExecutionException;

public class MainActivity extends AppCompatActivity {
    private WebView mWebView;

    static {
        Shell.enableVerboseLogging = BuildConfig.DEBUG;
        Shell.setDefaultBuilder(Shell.Builder.create()
                .setFlags(Shell.FLAG_REDIRECT_STDERR)
                .setInitializers(BusyBoxInstaller.class, Initializer.class)
        );
    }

    static class Initializer extends Shell.Initializer {
        @Override
        public boolean onInit(@NonNull Context context, @NonNull Shell shell) {
            InputStream bashrc = context.getResources().openRawResource(R.raw.bashrc);
            shell.newJob().add(bashrc).exec();
            return true;
        }
    }

    @Override
    @SuppressLint("SetJavaScriptEnabled")
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mWebView = findViewById(R.id.activity_main_webview);
        WebSettings webSettings = mWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        mWebView.setWebViewClient(new MyWebViewClient());
        getWindow().setStatusBarColor(0xFF0076FF);
        mWebView.loadUrl("file:///android_asset/index.html");
        mWebView.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void cmd(String command) {
                Shell.cmd(command).exec();
            }

            @JavascriptInterface
            public String cmdResult(String command) {
                return ShellUtils.fastCmd(Shell.getShell(), command);
            }

            @JavascriptInterface
            public boolean rootAccess() {
                return Shell.rootAccess();
            }
        }, "Android");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Shell.cmd("resetBattery -f");
    }

    @Override
    public void onBackPressed() {
        if (mWebView.canGoBack()) {
            mWebView.goBack();
        } else {
            super.onBackPressed();
        }
    }
}
