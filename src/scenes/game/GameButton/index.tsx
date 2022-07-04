import React from 'react'
import { Image, ImageSourcePropType, Pressable } from 'react-native'

import { styles } from './styles'

interface Props {
  onPress: () => void
  imageSource: ImageSourcePropType
}

export const GameButton: React.FC<Props> = ({ onPress, imageSource }) => {
  return (
    <Pressable
      testID="gameButton"
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
        styles.button,
      ]}>
      <Image source={imageSource} style={styles.buttonImage} />
    </Pressable>
  )
}
