import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
  },
})
