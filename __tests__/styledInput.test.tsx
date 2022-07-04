import { render } from '@testing-library/react-native'
import React from 'react'
import { StyledInput } from 'src/components/StyledInput'

describe('Test StyledInput', () => {
  test('Expect StyledInput to be rendered correctly with some label', async () => {
    const renderedSnapshot = render(<StyledInput label="Label" />).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })

  test('Expect StyledInput to be rendered with error text', async () => {
    const renderedSnapshot = render(
      <StyledInput error={true} helperText={'Some error'} />,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })

  test('Expect StyledInput to not be rendered with error text', async () => {
    const renderedSnapshot = render(
      <StyledInput error={false} helperText={'Some error'} />,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })
})
