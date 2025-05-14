module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      require.resolve('nativewind/babel'),
      require.resolve('expo-router/babel'),
      require.resolve('react-native-reanimated/plugin'),
    ],
  };
}; 