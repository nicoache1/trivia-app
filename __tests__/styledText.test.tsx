import { render } from '@testing-library/react-native'
import React from 'react'
import { StyledText } from 'src/components/StyledText'
import { AppTypography, ColorPalette } from 'src/styles/types'

describe('Test StyledText', () => {
  test('Expect StyledText to be rendered correctly with default', async () => {
    const children = 'Test'

    const renderedSnapshot = render(
      <StyledText>{children}</StyledText>,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })

  test('Expect StyledText to be rendered correctly with color & typography', async () => {
    const children = 'Test'

    const renderedSnapshot = render(
      <StyledText
        color={ColorPalette.BLUE_SURFACE}
        typography={AppTypography.P1_MEDIUM}>
        {children}
      </StyledText>,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })
})
