require('./node_modules/react-native-reanimated/src/reanimated2/jestUtils').setUpTests()

global.ReanimatedDataMock = {
  now: () => 0,
}
