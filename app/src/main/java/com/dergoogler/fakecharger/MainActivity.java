package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.widget.Button;

import com.google.android.material.textfield.TextInputEditText;
import com.topjohnwu.superuser.BusyBoxInstaller;
import com.topjohnwu.superuser.Shell;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import java.io.InputStream;
import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    static {
        Shell.enableVerboseLogging = BuildConfig.DEBUG;
        Shell.setDefaultBuilder(Shell.Builder.create()
                .setFlags(Shell.FLAG_REDIRECT_STDERR)
                // BusyBoxInstaller should come first!
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
        //TextInputEditText selfBattery = findViewById(R.id.selfMaxBattery);
        //Button setSelfBattery = findViewById(R.id.setSelfBattery);
        //Button resetSelfBattery = findViewById(R.id.resetSelfBattery);

        startButton.setOnClickListener((view) -> {
            String speed = "-s " + getText(maxSpeed) + " ";
            String add = "-a " + getText(maxAdd) + " ";
            String battery = "-m " + getText(maxBattery) + " ";
            Shell.cmd("fakecharger " + speed + add + battery).exec();
        });

       // setSelfBattery.setOnClickListener((view) -> {
        //    Shell.cmd("cmd battery set level " + getText(selfBattery)).exec();
       // });

      //  resetSelfBattery.setOnClickListener((view) -> {
        //    Shell.cmd("cmd battery reset -f").exec();
        //});

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
