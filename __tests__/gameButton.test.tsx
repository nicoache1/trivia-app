import { fireEvent, render, screen } from '@testing-library/react-native'
import Image from 'assets/check.png'
import React from 'react'

import { GameButton } from '../src/scenes/game/GameButton/index'

jest.setTimeout(7000)

const image = Image
const mockFn = jest.fn()

test('button gets pressed', () => {
  render(<GameButton onPress={mockFn} imageSource={image} />)

  fireEvent.press(screen.getByTestId('gameButton'))

  expect(mockFn).toBeCalledTimes(1)
}, 10000)

test('Expect GameButton to be rendered correctly', async () => {
  const renderedSnapshot = render(
    <GameButton onPress={mockFn} imageSource={image} />,
  ).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
