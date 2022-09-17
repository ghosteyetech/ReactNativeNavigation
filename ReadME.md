## Android path

$ export ANDROID_SDK_ROOT=/home/ghosteye/

export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$ANDROID_SDK/emulator:$ANDROID_SDK/tools:$PATH

Navigate to
$ cd $HOME/Android/Sdk/tools/

Run Following to start emulator
$ emulator -list-avds
$ emulator -avd Pixel_2_API_30

In case of need to kill emulator
$ ps -ax | grep emulator
$ kill -9 10226

## To esolve issue with adding stack navigation with drawer need to update babel.config.js as follows

```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: ["react-native-reanimated/plugin"],
  };
};

```
