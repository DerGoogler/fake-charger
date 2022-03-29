package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.Button;

import com.google.android.material.dialog.MaterialAlertDialogBuilder;
import com.google.android.material.textfield.TextInputEditText;
import com.topjohnwu.superuser.Shell;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    @SuppressLint("SdCardPath")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Elements
        TextInputEditText maxBattery = findViewById(R.id.maxBatteryEditText);
        TextInputEditText maxSpeed = findViewById(R.id.maxSpeedEditText);
        TextInputEditText maxAdd = findViewById(R.id.maxAddEditText);
        Button startButton = findViewById(R.id.startButton);

        // Check if module is installed
        boolean checkModule = Boolean.parseBoolean(Utils.cmdResult("[ -f " + Utils.modulePath + "/module.prop" + " ] && echo true || echo false"));

        if (!checkModule) {
            new MaterialAlertDialogBuilder(MainActivity.this)
                    .setTitle("Module not found!")
                    .setMessage("You need to install the Magisk Module to use this app")
                    .setNegativeButton("Cancel", (dialog, which) -> {
                        finish();
                    })
                    .setPositiveButton("Install", (dialog, which) -> {
                        String fileName ="fake-charger-module.zip";
                        Utils.downloadFile("https://github.com/DerGoogler/fake-shell-charger/releases/download/unnamed/" + fileName, fileName);
                        Utils.installModule("/data/local/tmp/" + fileName);
                    })
                    .show();
        }

        startButton.setOnClickListener((view) -> {
            String cmd = "fake-charger ";
            String speed = "--speed " + getText(maxSpeed) + " ";
            String add = "--maxAdd " + getText(maxAdd) + " ";
            String battery = "--maxBattery " + getText(maxBattery) + " ";
            String exec = cmd + speed + add + battery;
            Shell.cmd(exec).exec();
        });

    }

    // Works only with TextInputEditText
    private String getText(TextInputEditText edittext) {
        return Objects.requireNonNull(edittext.getText()).toString();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }
}
