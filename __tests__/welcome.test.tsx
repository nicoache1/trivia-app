import { render } from '@testing-library/react-native'
import React from 'react'
import { Routes } from 'src/navigation/routes'
import { Welcome } from 'src/scenes/welcome'

import {
  createNavigationPropMock,
  createRoutePropMock,
} from '../__mocks__/navigationMocks'
import { renderWithProvider } from '../utils/testUtils'

test('Expect Welcome to be rendered correctly with default', async () => {
  const mockRoute = createRoutePropMock<Routes.Welcome>(Routes.Welcome)

  const mockNavigation = createNavigationPropMock<Routes.Welcome>()

  const enhancedComponent = renderWithProvider(
    <Welcome route={mockRoute} navigation={mockNavigation} />,
  )

  const renderedSnapshot = render(enhancedComponent).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
