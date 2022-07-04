import { render } from '@testing-library/react-native'
import React from 'react'
import { Routes } from 'src/navigation/routes'
import { AnimatedSplash } from 'src/scenes/animatedSplash'

import {
  createNavigationPropMock,
  createRoutePropMock,
} from '../__mocks__/navigationMocks'

test('Expect AnimatedSplash to be rendered correctly with default', async () => {
  const mockRoute = createRoutePropMock<Routes.AnimatedSplash>(
    Routes.AnimatedSplash,
  )

  const mockNavigation = createNavigationPropMock<Routes.AnimatedSplash>()

  const renderedSnapshot = render(
    <AnimatedSplash route={mockRoute} navigation={mockNavigation} />,
  ).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
