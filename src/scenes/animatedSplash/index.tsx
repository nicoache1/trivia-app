import SplashImage from 'assets/splashShape.png'
import * as SplashScreen from 'expo-splash-screen'
import React, { useLayoutEffect } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useTheme } from 'src/styles/Theme'

import { styles } from './styles'

const { width, height } = Dimensions.get('window')

export const AnimatedSplash: SceneProps<Routes.AnimatedSplash> = ({
  navigation,
}) => {
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [navigation])

  const {
    Theme: { colors },
  } = useTheme()

  const progress = useSharedValue(0)
  const imageAnimation = useSharedValue(0)

  const onImageLoaded = async () => {
    await SplashScreen.hideAsync()
    progress.value = withTiming(1, { duration: 700 }, () => {
      imageAnimation.value = withTiming(1, {}, finished => {
        if (finished) {
          runOnJS(navigation.replace)(Routes.Welcome)
        }
      })
    })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: colors.SECONDARY,
    transform: [
      { translateY: width / 2 },
      { rotate: `${interpolate(progress.value, [0, 1], [-25, 0])}deg` },
      { translateX: interpolate(progress.value, [0, 1], [-height, 0]) },
      { translateY: -width / 2 },
    ],
    zIndex: 1,
  }))

  const animatedImage = useAnimatedStyle(() => ({
    height: interpolate(imageAnimation.value, [0, 0.5, 1], [70, 80, 0]),
    opacity: interpolate(imageAnimation.value, [0, 1], [1, 0]),
    zIndex: 100,
  }))

  return (
    <View style={styles.container}>
      <Animated.Image
        onLoadEnd={onImageLoaded}
        source={SplashImage}
        style={animatedImage}
        resizeMode={'contain'}
      />
      <Animated.View
        style={[animatedStyle, { ...StyleSheet.absoluteFillObject }]}
      />
    </View>
  )
}
