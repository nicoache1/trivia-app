import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
  },
  categoryLabel: {
    borderRadius: 16,
    height: 40,
    justifyContent: 'center',
    minWidth: 120,
  },
  container: {
    borderRadius: 16,
    height: height * 0.5,
    overflow: 'hidden',
    padding: 20,
    position: 'absolute',
    width: '100%',
  },
  questionContainer: {
    flex: 2,
  },
  text: {
    textAlign: 'center',
  },
})
