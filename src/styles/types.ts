import { TextStyle } from 'react-native'

export interface ITheme {
  colors: PaletteStyle<string>
  typography: TypographyStyle<TextStyle>
  spacing: SpacingStyle<number>
}

export enum AppTypography {
  H0 = 'H0',
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  P1_MEDIUM = 'P1_MEDIUM',
  P1_REGULAR = 'P1_REGULAR',
  P1_BOLD = 'P1_BOLD',
}

export interface TypographyStyle<T> {
  [AppTypography.H0]: T
  [AppTypography.H1]: T
  [AppTypography.H2]: T
  [AppTypography.H3]: T
  [AppTypography.P1_MEDIUM]: T
  [AppTypography.P1_REGULAR]: T
  [AppTypography.P1_BOLD]: T
}

export enum ColorPalette {
  'BLACK' = 'BLACK',
  'BLUE_SURFACE' = 'BLUE_SURFACE',
  'PRIMARY' = 'PRIMARY',
  'SECONDARY' = 'SECONDARY',
  'TERTIARY' = 'TERTIARY',
  'WHITE' = 'WHITE',
  'TRANSPARENT' = 'TRANSPARENT',
  'ERROR' = 'ERROR',
  'SEPARATOR' = 'SEPARATOR',
  'PINK' = 'PINK',
  'ORANGE' = 'ORANGE',
}

export interface PaletteStyle<T> {
  [ColorPalette.BLACK]: T
  [ColorPalette.ERROR]: T
  [ColorPalette.WHITE]: T
  [ColorPalette.TRANSPARENT]: T
  [ColorPalette.SECONDARY]: T
  [ColorPalette.PRIMARY]: T
  [ColorPalette.TERTIARY]: T
  [ColorPalette.BLUE_SURFACE]: T
  [ColorPalette.SEPARATOR]: T
  [ColorPalette.PINK]: T
  [ColorPalette.ORANGE]: T
}

export enum SpacingScale {
  HORIZONTAL_SCREEN_PADDING = 'HORIZONTAL_SCREEN_PADDING',
}

export interface SpacingStyle<T> {
  [SpacingScale.HORIZONTAL_SCREEN_PADDING]: T
}
