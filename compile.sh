#!/bin/bash
rm /home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/tangofury.apk

export JAVA_HOME=/usr/lib/jvm/java-8-openjdk/

ionic cordova build android --prod --release

/usr/lib/jvm/java-8-openjdk/bin/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /home/fabien/Documents/keytangofury.jks /home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk my-alias
/home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/tangofury.apk

/home/fabien/Android/Sdk/build-tools/29.0.0/zipalign 4 /home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk /home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/tangofury.apk 

dolphin /home/fabien/sites/tangofury/platforms/android/app/build/outputs/apk/release/