import React from 'react'
import { TextInputProps } from 'react-native'
import { HelperText, TextInput } from 'react-native-paper'

import { useTheme } from '../../styles/Theme'
import { StyledContainer } from '../StyledContainer'
import { styles } from './styles'

interface StyledInputProps extends TextInputProps {
  helperText?: string
  label?: string
  error?: boolean
}

export const StyledInput: React.FC<StyledInputProps> = ({
  placeholder,
  label,
  error = false,
  helperText,
  ...props
}) => {
  const { Theme } = useTheme()

  const borderColor = error ? Theme.colors.ERROR : Theme.colors.WHITE

  return (
    <StyledContainer>
      <TextInput
        {...props}
        label={label}
        style={[
          styles.input,
          {
            borderColor,
          },
        ]}
        activeOutlineColor={Theme.colors.WHITE}
        placeholderTextColor={Theme.colors.WHITE}
        placeholder={placeholder}
        selectionColor={Theme.colors.WHITE}
        theme={{
          colors: {
            accent: borderColor,
            disabled: borderColor,
            placeholder: borderColor,
            primary: borderColor,
            text: borderColor,
          },
        }}
        mode={'flat'}
      />
      {!!helperText && (
        <HelperText type={'error'} visible={error}>
          {helperText}
        </HelperText>
      )}
    </StyledContainer>
  )
}
