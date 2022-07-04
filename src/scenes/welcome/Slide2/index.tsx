import Cyborg from 'assets/onboarding/cyborg_2.svg'
import { localization } from 'localization'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

const { width, height } = Dimensions.get('window')

export const Slide2: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
          <Path
            d="M-7.5 612.5L-460 243.5V948.5H1209V264.5L862 673L414.5 -76L-7.5 612.5Z"
            fill="#e4726c"
            fillOpacity="0.4"
          />
        </Svg>
      </View>
      <Cyborg />
      <StyledText color={ColorPalette.WHITE} typography={AppTypography.H1}>
        {localization('comeOnLabel')}
      </StyledText>
      <StyledText color={ColorPalette.TERTIARY} typography={AppTypography.H0}>
        {localization('itsEasyLabel')}
      </StyledText>
    </View>
  )
}
