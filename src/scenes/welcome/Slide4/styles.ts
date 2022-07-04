import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width,
  },
  textContainer: {
    flexDirection: 'row',
  },
  vector: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
  },
})
