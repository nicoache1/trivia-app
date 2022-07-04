import { render } from '@testing-library/react-native'
import React from 'react'
import { Routes } from 'src/navigation/routes'
import { Results } from 'src/scenes/results'

import {
  createNavigationPropMock,
  createRoutePropMock,
} from '../__mocks__/navigationMocks'
import { renderWithProvider } from '../utils/testUtils'

test('Expect Results to be rendered correctly with default', async () => {
  const mockRoute = createRoutePropMock<Routes.Results>(Routes.Results)

  const mockNavigation = createNavigationPropMock<Routes.Results>()

  const enhancedComponent = renderWithProvider(
    <Results route={mockRoute} navigation={mockNavigation} />,
  )

  const renderedSnapshot = render(enhancedComponent).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
