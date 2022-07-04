import { render } from '@testing-library/react-native'
import React from 'react'
import { StyledButton } from 'src/components/StyledButton'

test('Expect StyledButton to be rendered correctly', async () => {
  const renderedSnapshot = render(<StyledButton label={'label'} />).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
