import Cyborg from 'assets/onboarding/cyborg_1.svg'
import { localization } from 'localization'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

const { width } = Dimensions.get('window')

export const Slide1: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height="717" viewBox="0 0 375 717" fill="none">
          <Path
            d="M-348.5 688.5L-801 319.5V1024.5H868V340.5L521 749L73.5 0L-348.5 688.5Z"
            fill="#142664"
            fillOpacity="0.2"
          />
        </Svg>
      </View>
      <Cyborg />
      <StyledText color={ColorPalette.TERTIARY} typography={AppTypography.H0}>
        {localization('welcomeLabel')}
      </StyledText>
      <StyledText
        color={ColorPalette.WHITE}
        style={styles.text}
        typography={AppTypography.H1}>
        {localization('tricktyLabel')}
      </StyledText>
    </View>
  )
}
