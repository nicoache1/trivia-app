import Cyborg from 'assets/onboarding/cyborg_4.svg'
import { localization } from 'localization'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

const { width } = Dimensions.get('window')

export const Slide4: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height="812" viewBox="0 0 375 812" fill="none">
          <Path
            d="M-757.5 612.5L-1210 243.5V948.5H459V264.5L112 673L-335.5 -76L-757.5 612.5Z"
            fill="#e65e8d"
            fill-opacity="0.2"
          />
        </Svg>
      </View>
      <Cyborg />
      <View style={styles.textContainer}>
        <StyledText color={ColorPalette.TERTIARY} typography={AppTypography.H1}>
          {localization('letsLabel')}
        </StyledText>
        <StyledText color={ColorPalette.WHITE} typography={AppTypography.H1}>
          {localization('startLabel')}
        </StyledText>
      </View>
    </View>
  )
}
