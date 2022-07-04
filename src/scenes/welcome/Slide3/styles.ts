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
    textAlign: 'center',
  },
  vector: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
})
