import { render } from '@testing-library/react-native'
import React from 'react'
import { Routes } from 'src/navigation/routes'
import { Game } from 'src/scenes/game'

import {
  createNavigationPropMock,
  createRoutePropMock,
} from '../__mocks__/navigationMocks'
import { renderWithProvider } from '../utils/testUtils'

test('Expect Game to be rendered correctly with default', async () => {
  const mockRoute = createRoutePropMock<Routes.Game>(Routes.Game)

  const mockNavigation = createNavigationPropMock<Routes.Game>()

  const enhancedComponent = renderWithProvider(
    <Game route={mockRoute} navigation={mockNavigation} />,
  )

  const renderedSnapshot = render(enhancedComponent).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
