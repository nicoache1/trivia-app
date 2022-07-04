import { render } from '@testing-library/react-native'
import React from 'react'
import { Routes } from 'src/navigation/routes'
import { ConfigureGame } from 'src/scenes/configureGame'

import {
  createNavigationPropMock,
  createRoutePropMock,
} from '../__mocks__/navigationMocks'
import { renderWithProvider } from '../utils/testUtils'

test('Expect ConfigureGame to be rendered correctly with default', async () => {
  const mockRoute = createRoutePropMock<Routes.ConfigureGame>(
    Routes.ConfigureGame,
  )

  const mockNavigation = createNavigationPropMock<Routes.ConfigureGame>()

  const enhancedComponent = renderWithProvider(
    <ConfigureGame route={mockRoute} navigation={mockNavigation} />,
  )

  const renderedSnapshot = render(enhancedComponent).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
