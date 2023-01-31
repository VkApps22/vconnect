package com.vulkan.vconnect;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.cynapsis.augmentifysdk.main.Augmentify;
import com.cynapsis.augmentifysdk.main.AugmentifyAvailabilityListener;
import com.cynapsis.augmentifysdk.main.errorhandling.AugmentifyError;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class AugmentifyModule extends ReactContextBaseJavaModule {

    public AugmentifyModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "Augmentify";
    }

    @ReactMethod
    public void hasSupport(Callback hasSupport) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.N) {
            hasSupport.invoke(false);

            return;
        }

        Augmentify.INSTANCE.checkAugmentifyAvailability(getReactApplicationContext(),
                new AugmentifyAvailabilityListener() {
                    @Override
                    public void isSupported() {
                        hasSupport.invoke(true);
                    }

                    @Override
                    public void isNotSupported(@NonNull AugmentifyError augmentifyError) {
                        hasSupport.invoke(false);
                    }
                });
    }

    @ReactMethod
    public void openExperience(String experienceId) {
        final String appToken = getReactApplicationContext()
                .getString(R.string.augmentify_app_token);

        final Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(Uri.parse("augmentify://"
                + appToken + "?experience_id="
                + experienceId));
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);

        getReactApplicationContext().startActivity(intent);
    }
}
