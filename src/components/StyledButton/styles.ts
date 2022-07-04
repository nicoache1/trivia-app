import { StyleSheet } from 'react-native'

import { ITheme } from '../../styles/types'
import { ButtonMode } from './ButtonMode'

export const textStyle = (theme: ITheme) => ({
  [ButtonMode.DARK]: {
    color: theme.colors.WHITE,
  },
  [ButtonMode.LIGHT]: {
    color: theme.colors.WHITE,
  },
})

export const buttonStyle = (theme: ITheme) => ({
  [ButtonMode.DARK]: {
    backgroundColor: theme.colors.PRIMARY,
  },
  [ButtonMode.LIGHT]: {
    backgroundColor: theme.colors.SECONDARY,
  },
})

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 10,
    height: 56,
    justifyContent: 'center',
    paddingVertical: 10,
    width: '100%',
  },
  buttonText: {
    alignItems: 'center',
  },
})
