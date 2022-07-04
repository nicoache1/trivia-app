import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width,
  },
  text: {
    fontWeight: '300',
  },
  vector: {
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
})
