package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;

import com.topjohnwu.superuser.Shell;
import com.topjohnwu.superuser.ShellUtils;


public class MainActivity extends AppCompatActivity {
    private WebView mWebView;

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
                Lib.exec(command);
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
        Lib.exec("cmd battery reset -f");
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
