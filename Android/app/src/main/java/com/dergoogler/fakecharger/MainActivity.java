package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;

import androidx.appcompat.app.AppCompatActivity;

import com.topjohnwu.superuser.Shell;
import com.topjohnwu.superuser.ShellUtils;

import java.io.InputStream;


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
        mWebView.loadUrl(Lib.indexFile());
        mWebView.addJavascriptInterface(new Object() {
            @JavascriptInterface
            public void exec(String command) {
                InputStream bashrc = MainActivity.this.getResources().openRawResource(R.raw.bashrc);
                Shell.cmd(bashrc).add(command).exec();
            }

            @JavascriptInterface
            public String execResult(String command) {
                return ShellUtils.fastCmd(command);
            }

            @JavascriptInterface
            public Boolean isAppGrantedRoot() {
                Boolean appGrantedRoot = Shell.isAppGrantedRoot();
                if (appGrantedRoot == null) {
                    return false;
                } else return appGrantedRoot;
            }
        }, Lib.interfaceName());
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
