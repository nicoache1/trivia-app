import React, { useCallback, useImperativeHandle } from 'react'
import { Dimensions, View } from 'react-native'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { snapPoint } from 'react-native-redash'
import { StyledText } from 'src/components/StyledText'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { Question } from 'src/types/questions'

import { styles } from './styles'

interface Props {
  index: number
  item: Question
  onFinish: (option: boolean) => void
}

const { width } = Dimensions.get('window')

export const SNAP_POINTS = [-width / 1.5, 0, width / 1.5]
const Movements = {
  Center: 0,
  Left: -width * 1.5,
  Right: width * 1.5,
}

export const Card = React.forwardRef<
  { triggerAnimation: (option: boolean) => void },
  Props
>(({ index, item, onFinish }, ref) => {
  const {
    Theme: { colors },
  } = useTheme()

  const translationX = useSharedValue(0)

  const triggerAnimation = useCallback(
    (option: boolean) => {
      translationX.value = withTiming(
        option ? Movements.Left : Movements.Right,
        {},
        () => {
          runOnJS(onFinish)(option)
        },
      )
    },
    [onFinish, translationX],
  )

  useImperativeHandle(
    ref,
    () => ({
      triggerAnimation,
    }),
    [triggerAnimation],
  )

  const gesture = Gesture.Pan()
    .onUpdate(e => {
      translationX.value = e.translationX
    })
    .onEnd(({ velocityX }) => {
      const nearestPoint = snapPoint(translationX.value, velocityX, SNAP_POINTS)
      let toValue =
        nearestPoint === SNAP_POINTS[0]
          ? Movements.Left
          : nearestPoint === SNAP_POINTS[2]
          ? Movements.Right
          : Movements.Center
      translationX.value = withSpring(toValue, {})
      if (toValue !== Movements.Center) {
        runOnJS(onFinish)(Movements.Left ? true : false)
      }
    })
    .withTestId('PanGesture')

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translationX.value }],
    }
  })

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={[
          styles.container,
          { backgroundColor: colors.WHITE, zIndex: index },
          animatedStyle,
        ]}>
        <View style={styles.categoryContainer}>
          <View
            style={[
              styles.categoryLabel,
              {
                backgroundColor: colors.SECONDARY,
              },
            ]}>
            <StyledText
              testID="CardCategory"
              style={styles.text}
              typography={AppTypography.P1_BOLD}
              color={ColorPalette.WHITE}
              allowFontScaling>
              {item.category}
            </StyledText>
          </View>
        </View>
        <View style={styles.questionContainer}>
          <StyledText
            testID="CardQuestion"
            style={styles.text}
            typography={AppTypography.H2}>
            {item.question}
          </StyledText>
        </View>
      </Animated.View>
    </GestureDetector>
  )
})
