import LoadingLottie from 'assets/animations/loading.json'
import { localization } from 'localization'
import AnimatedLottieView from 'lottie-react-native'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { Background } from 'src/components/Background'
import { StyledText } from 'src/components/StyledText'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

interface Props {
  callback: () => void
}

export const FinishGame: React.FC<Props> = ({ callback }) => {
  const {
    Theme: { colors },
  } = useTheme()

  useEffect(() => {
    let timeout = setTimeout(() => {
      callback && callback()
    }, 5000)

    return () => clearTimeout(timeout)
  }, [callback])

  return (
    <View style={[styles.container, { backgroundColor: colors.SECONDARY }]}>
      <Background />
      <AnimatedLottieView
        style={styles.lottie}
        source={LoadingLottie}
        autoPlay
      />
      <StyledText color={ColorPalette.WHITE} typography={AppTypography.H2}>
        {localization('retrievingResultsLabel')}
      </StyledText>
    </View>
  )
}
