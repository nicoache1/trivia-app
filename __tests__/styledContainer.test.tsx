import { render } from '@testing-library/react-native'
import React from 'react'
import { StyledContainer } from 'src/components/StyledContainer'
import { ColorPalette } from 'src/styles/types'

describe('Test styledContainer', () => {
  test('Expect StyledContainer to be rendered correctly with normal color', async () => {
    const renderedSnapshot = render(<StyledContainer />).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })

  test('Expect StyledContainer to be rendered with some color', async () => {
    const renderedSnapshot = render(
      <StyledContainer color={ColorPalette.BLUE_SURFACE} />,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })
})
