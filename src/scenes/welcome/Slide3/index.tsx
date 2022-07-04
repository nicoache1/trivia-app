import Cyborg from 'assets/onboarding/cyborg_3.svg'
import { localization } from 'localization'
import React from 'react'
import { Dimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { styles } from './styles'

const { width, height } = Dimensions.get('window')

export const Slide3: React.FC<{}> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.vector}>
        <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
          <Path
            d="M-382.5 612.5L-835 243.5V948.5H834V264.5L487 673L39.5 -76L-382.5 612.5Z"
            fill="#00a181"
            fillOpacity="0.4"
          />
        </Svg>
      </View>
      <Cyborg />
      <StyledText color={ColorPalette.TERTIARY} typography={AppTypography.H0}>
        {localization('playLabel')}
      </StyledText>
      <StyledText
        color={ColorPalette.WHITE}
        style={styles.text}
        typography={AppTypography.H1}>
        {localization('itsFunnyLabel')}
      </StyledText>
    </View>
  )
}
