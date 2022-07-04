import { localization } from 'localization'
import React from 'react'
import { StyledContainer } from 'src/components/StyledContainer'
import { StyledText } from 'src/components/StyledText'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'

import { AnimatedCircular } from '../AnimatedCircular'
import { styles } from './styles'

interface Props {
  total: number
  correctOnes: number
}

export const Header: React.FC<Props> = ({ total, correctOnes }) => {
  const {
    Theme: { colors },
  } = useTheme()

  return (
    <>
      <StyledContainer style={styles.titleContainer}>
        <StyledText typography={AppTypography.H1} color={ColorPalette.WHITE}>
          {localization('resultsSectionTitle')}
        </StyledText>
      </StyledContainer>
      <StyledContainer style={styles.circularContainer}>
        <AnimatedCircular
          totalValue={total}
          currentValue={correctOnes}
          color={colors.PRIMARY}
          previousColor={'rgba(0, 184, 147, 0.4)'}
        />
      </StyledContainer>
      <StyledContainer>
        <StyledText typography={AppTypography.H1} color={ColorPalette.WHITE}>
          {localization('detailsSectionTitle')}
        </StyledText>
      </StyledContainer>
    </>
  )
}
