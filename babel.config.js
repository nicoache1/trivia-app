/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */

module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          root: ['.'],
        },
      ],
    ],
  }
}
