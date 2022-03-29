package com.dergoogler.fakecharger;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.widget.Button;

import com.google.android.material.textfield.TextInputEditText;

import androidx.appcompat.app.AppCompatActivity;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    @SuppressLint("SdCardPath")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Lib.requestRoot();
        // Elements
        //TextInputEditText maxBattery = findViewById(R.id.maxBatteryEditText);
        //TextInputEditText maxSpeed = findViewById(R.id.maxSpeedEditText);
        //TextInputEditText maxAdd = findViewById(R.id.maxAddEditText);
        //Button startButton = findViewById(R.id.startButton);
        TextInputEditText selfBattery = findViewById(R.id.selfMaxBattery);
        Button setSelfBattery = findViewById(R.id.setSelfBattery);

        /*startButton.setOnClickListener((view) -> {
            final Shell.Result result;
            String speed = "export _maxspeed_=" + getText(maxSpeed);
            String add = "export _maxadd_=" + getText(maxAdd);
            String battery = "export _maxcharge_=" + getText(maxBattery);

            InputStream charger = this.getResources().openRawResource(R.raw.fakecharger);
            result = Shell.cmd()
                    .add(charger)
                    .add(speed)
                    .add(add)
                    .add(battery)
                    .exec();

            if (result.isSuccess()) {
                Shell.cmd("cmd battery reset");
            }
        });*/

        setSelfBattery.setOnClickListener((view) -> {
            Lib.setBattery(getText(selfBattery));
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
