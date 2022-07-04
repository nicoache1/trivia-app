import React, { useEffect } from 'react'
import { PixelRatio, View } from 'react-native'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated'
import Svg, { Circle } from 'react-native-svg'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

interface LayoutProps {
  currentValue: number
  totalValue: number
  color: string
  previousColor: string
}

const AnimatedCircle = Animated.createAnimatedComponent(Circle)

const SIZE = 300
const STROKE_WIDTH = 30

export const AnimatedCircular: React.FC<LayoutProps> = ({
  currentValue,
  totalValue,
  color,
  previousColor,
}) => {
  const r = PixelRatio.roundToNearestPixel(SIZE / 2)
  const radius = r - STROKE_WIDTH / 2
  const circumference = radius * 2 * Math.PI

  let percentageReceived = useSharedValue<number>(0)

  useEffect(() => {
    if (currentValue && totalValue) {
      const newValue = (currentValue * 1) / totalValue
      percentageReceived.value = withDelay(
        1000,
        withTiming(newValue, { duration: 600 }),
      )
    }
  }, [currentValue, percentageReceived, totalValue])

  const props = useAnimatedProps(() => {
    return {
      strokeDashoffset:
        interpolate(
          percentageReceived.value,
          [1, 0],
          [0, Math.PI * 2],
          Extrapolate.CLAMP,
        ) * radius,
    }
  })

  return (
    <>
      <View style={styles.container}>
        <Svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          fill="none">
          <Circle
            cx={r}
            cy={r}
            r={radius}
            stroke={previousColor}
            fill="transparent"
            strokeWidth={STROKE_WIDTH}
          />
          <AnimatedCircle
            animatedProps={props}
            cx={r}
            cy={r}
            r={radius}
            stroke={color}
            strokeWidth={STROKE_WIDTH}
            fill="transparent"
            strokeDasharray={`${circumference}, ${circumference}`}
          />
        </Svg>
        <View style={styles.infoContainer}>
          <StyledText
            color={ColorPalette.WHITE}
            style={styles.text}
            typography={AppTypography.H1}>{`${currentValue}`}</StyledText>
          <StyledText
            color={ColorPalette.WHITE}
            style={styles.text}
            typography={AppTypography.H1}>{`of ${totalValue}`}</StyledText>
        </View>
      </View>
    </>
  )
}
