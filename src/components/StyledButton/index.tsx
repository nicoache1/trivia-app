import React from 'react'
import { PressableProps, StyleProp, ViewStyle } from 'react-native'
import { Pressable } from 'react-native'
import Animated from 'react-native-reanimated'

import { useTheme } from '../../styles/Theme'
import { AppTypography } from '../../styles/types'
import { StyledText } from '../StyledText'
import { ButtonMode } from './ButtonMode'
import { buttonStyle, styles, textStyle } from './styles'

interface Props extends PressableProps {
  label: string
  mode?: ButtonMode
  customStyles?: StyleProp<ViewStyle>
}

export const StyledButton: React.FC<Props> = ({
  label,
  mode = ButtonMode.LIGHT,
  onPress,
  customStyles,
}) => {
  const { Theme } = useTheme()
  return (
    <Pressable
      style={({ pressed }) => [styles.button, { opacity: pressed ? 0.5 : 1.0 }]}
      onPress={onPress}>
      <Animated.View
        style={[
          styles.button,
          customStyles !== undefined ? customStyles : buttonStyle(Theme)[mode],
        ]}>
        <StyledText
          style={[styles.buttonText, textStyle(Theme)[mode]]}
          typography={AppTypography.P1_BOLD}>
          {label}
        </StyledText>
      </Animated.View>
    </Pressable>
  )
}
