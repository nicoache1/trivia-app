import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  lottie: {
    height: height * 0.4,
  },
})
