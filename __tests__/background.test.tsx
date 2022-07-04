import { render } from '@testing-library/react-native'
import React from 'react'
import { Background } from 'src/components/Background'

test('Expect Background to be rendered correctly', async () => {
  const renderedSnapshot = render(<Background />).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
