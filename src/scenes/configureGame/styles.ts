import { Dimensions, StyleSheet } from 'react-native'

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    flex: 4,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    width,
  },
  scene: {
    backgroundColor: 'transparent',
  },
  screenContainer: {
    flex: 1,
  },
  subtitle: {
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: 'row',
  },
  vector: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 70,
  },
})
