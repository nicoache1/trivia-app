import { render } from '@testing-library/react-native'
import React from 'react'

import { FinishGame } from '../src/scenes/game/FinishGame/index'

const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

test('expect to callback function to be called after X sec', async () => {
  const mockFn = jest.fn()

  render(<FinishGame callback={mockFn} />)

  await timeout(6000)

  await expect(mockFn).toBeCalledTimes(1)
})

test('Expect FinishGame to be rendered correctly', async () => {
  const mockFn = jest.fn()
  const renderedSnapshot = render(<FinishGame callback={mockFn} />).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
