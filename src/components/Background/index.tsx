import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

import { styles } from './styles'

export const Background: React.FC<{}> = ({}) => {
  const { width } = useWindowDimensions()

  return (
    <View style={styles.vector}>
      <Svg
        width={width}
        height="812"
        viewBox="0 0 375 812"
        fill="none"
        preserveAspectRatio="xMinYMin slice">
        <Path
          d="M-757.5 612.5L-1210 243.5V948.5H459V264.5L112 673L-335.5 -76L-757.5 612.5Z"
          fill="#142664"
          fillOpacity="0.3"
        />
      </Svg>
    </View>
  )
}
