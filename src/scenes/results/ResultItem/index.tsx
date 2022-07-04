import CheckImage from 'assets/check.png'
import CrossImage from 'assets/cross.png'
import React from 'react'
import { Image, View } from 'react-native'
import { StyledContainer } from 'src/components/StyledContainer'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { QuestionResult } from 'src/types/questions'

import { styles } from './styles'

interface Props {
  item: QuestionResult
}

export const ResultItem: React.FC<Props> = ({ item }) => {
  const image = item.correct ? CheckImage : CrossImage

  return (
    <StyledContainer style={styles.container}>
      <View style={styles.questionContainer}>
        <StyledText
          typography={AppTypography.P1_MEDIUM}
          color={ColorPalette.WHITE}>
          {item.question.question}
        </StyledText>
      </View>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode={'contain'} />
      </View>
    </StyledContainer>
  )
}
