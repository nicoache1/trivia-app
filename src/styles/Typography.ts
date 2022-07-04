import { TextStyle } from 'react-native'

import { AppTypography, TypographyStyle } from './types'

export const Typography: TypographyStyle<TextStyle> = {
  [AppTypography.H0]: {
    fontSize: 62,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  [AppTypography.H1]: {
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  [AppTypography.H2]: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  [AppTypography.H3]: {
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  [AppTypography.P1_MEDIUM]: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
  },
  [AppTypography.P1_REGULAR]: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
  },
  [AppTypography.P1_BOLD]: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '700',
  },
}
