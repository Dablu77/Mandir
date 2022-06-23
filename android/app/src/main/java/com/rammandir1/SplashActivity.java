package com.rammandir1;



import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;

import androidx.appcompat.app.AppCompatActivity;



public class SplashActivity extends AppCompatActivity {
    @Override
    protected  void  onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
      //  Intent intent = new Intent(this, MainActivity.class);
        // startActivity(intent);
        // finish();

new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
               Intent intent=new Intent(SplashActivity.this,MainActivity.class);
                  
                startActivity(intent);
                //invoke the SecondActivity.
                  
                finish();
                //the current activity will get finished.
            }
        }, 3000);


    }
}
