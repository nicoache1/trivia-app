import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface ReviewProps {}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})

export const Review: React.FC<ReviewProps> = ({}) => {
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
    </View>
  )
}
