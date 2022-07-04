import { Dimensions, StyleSheet } from 'react-native'

const { height } = Dimensions.get('window')

export const styles = StyleSheet.create({
  answerOptionContainer: {
    alignItems: 'center',
    bottom: height * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    marginHorizontal: 15,
    position: 'absolute',
    right: 0,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 40,
    elevation: 11,
    height: 110,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    width: 110,
  },
  buttonImage: {
    height: 80,
    width: 80,
  },
  cardContainer: {
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    paddingVertical: 60,
  },
  playerContainer: {
    height: 100,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
})
