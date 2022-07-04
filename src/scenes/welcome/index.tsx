import Circle from 'assets/onboarding/circle.svg'
import { localization } from 'localization'
import React, { useLayoutEffect, useState } from 'react'
import { Dimensions, View } from 'react-native'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { StyledButton } from 'src/components/StyledButton'
import { StyledContainer } from 'src/components/StyledContainer'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { Palette } from 'src/styles/Palette'

import { Slide1 } from './Slide1'
import { Slide2 } from './Slide2'
import { Slide3 } from './Slide3'
import { Slide4 } from './Slide4'
import { styles } from './styles'

const { width, height } = Dimensions.get('window')

const colors = [
  Palette.SECONDARY,
  Palette.ORANGE,
  Palette.PRIMARY,
  Palette.PINK,
]
const buttonColors = [
  Palette.PRIMARY,
  Palette.SECONDARY,
  Palette.ORANGE,
  Palette.PRIMARY,
]
const snapPoints = [0, -width, -width * 2, -width * 3]
const circleYPositions = [height / 5, height / 3, height / 5, height / 6]
const circleXPositions = [-20, -40, 10, -30]
const circleScaleSizes = [1, 1.5, 1.2, 1.4]
const rotations = [-40, 0, 0, -40]
const buttonText = [
  localization('startNowLabel'),
  localization('nextLabel'),
  localization('nextLabel'),
  localization('beginLabel'),
]

export const Welcome: SceneProps<Routes.Welcome> = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const translateX = useSharedValue(0)
  const circleTranslateY = useSharedValue(height / 5)
  const circleTranslateX = useSharedValue(-20)
  const circleScale = useSharedValue(1)
  const circleRotate = useSharedValue(-40)
  const [index, setIndex] = useState<number>(0)

  const derivedBackground = useDerivedValue(() => {
    const WIDTH_3 = width * 3
    const WIDTH_2 = width * 2
    const WIDTH_1 = width

    return interpolateColor(
      translateX.value * -1,
      [0, WIDTH_1, WIDTH_2, WIDTH_3],
      colors,
      'RGB',
    )
  })

  const derivedButtonColor = useDerivedValue(() => {
    const WIDTH_3 = width * 3
    const WIDTH_2 = width * 2
    const WIDTH_1 = width

    return interpolateColor(
      translateX.value * -1,
      [0, WIDTH_1, WIDTH_2, WIDTH_3],
      buttonColors,
      'RGB',
    )
  })

  const animatedBackgroundStyle = useAnimatedStyle(
    () => ({
      backgroundColor: derivedBackground.value,
    }),
    [derivedButtonColor],
  )

  const animatedButtonStyle = useAnimatedStyle(
    () => ({
      backgroundColor: derivedButtonColor.value,
    }),
    [derivedButtonColor],
  )

  const onPress = () => {
    if (index !== 3) {
      const newIndex = index + 1

      const value = snapPoints[newIndex]
      const circleYPosition = circleYPositions[newIndex]
      const circleXPosition = circleXPositions[newIndex]
      const circleScaleSize = circleScaleSizes[newIndex]
      const circleRotation = rotations[newIndex]

      translateX.value = withTiming(value, { duration: 400 })

      circleTranslateY.value = withTiming(circleYPosition, { duration: 500 })
      circleTranslateX.value = withTiming(circleXPosition, { duration: 500 })
      circleScale.value = withTiming(circleScaleSize, { duration: 500 })
      circleRotate.value = withTiming(circleRotation, { duration: 500 })

      setIndex(newIndex)
    } else {
      navigation.navigate(Routes.ConfigureGame)
    }
  }

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  const circleAnimatedStyle = useAnimatedStyle(() => ({
    right: circleTranslateX.value,
    top: circleTranslateY.value,
    transform: [
      { scale: circleScale.value },
      { rotate: `${circleRotate.value}deg` },
    ],
  }))

  return (
    <Animated.View style={[styles.container, animatedBackgroundStyle]}>
      <View style={styles.header} />
      <Animated.View style={[styles.circle, circleAnimatedStyle]}>
        <Circle />
      </Animated.View>
      <View style={styles.slider}>
        <Animated.View style={[styles.sliderContainer, animatedStyle]}>
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Animated.View>
      </View>
      <StyledContainer style={styles.footer}>
        <StyledButton
          onPress={onPress}
          customStyles={animatedButtonStyle}
          label={buttonText[index]}
        />
      </StyledContainer>
    </Animated.View>
  )
}
