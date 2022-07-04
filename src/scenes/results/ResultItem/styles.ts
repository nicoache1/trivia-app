import { StyleSheet } from 'react-native'

export const ITEM_HEIGHT = 100

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: ITEM_HEIGHT,
  },
  image: {
    height: 50,
    width: 50,
  },
  imageContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'center',
  },
  questionContainer: {
    flex: 2,
    justifyContent: 'center',
  },
})
