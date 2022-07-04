import { render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'
import { SceneContainer } from 'src/components/SceneContainer'

describe('Test SceneContainer', () => {
  test('Expect SceneContainer to be rendered correctly with some children', async () => {
    const children = <Text>Children</Text>

    const renderedSnapshot = render(
      <SceneContainer>{children}</SceneContainer>,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })

  test('Expect SceneContainer to be rendered correctly with some children & bar style', async () => {
    const children = <Text>Children</Text>

    const renderedSnapshot = render(
      <SceneContainer barStyle={'light-content'}>{children}</SceneContainer>,
    ).toJSON()

    expect(renderedSnapshot).toMatchSnapshot()
  })
})
