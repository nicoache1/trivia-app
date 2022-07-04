import { render } from '@testing-library/react-native'
import React from 'react'
import { State } from 'react-native-gesture-handler'
import {
  fireGestureHandler,
  getByGestureTestId,
} from 'react-native-gesture-handler/jest-utils'
import * as ReactNativeRedash from 'react-native-redash'
import { Difficulties } from 'src/types/game'
import { Question } from 'src/types/questions'

import { Card, SNAP_POINTS } from '../src/scenes/game/Card/index'

const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

jest.mock('react-native-redash')

const mockFn = jest.fn()
const mockIndex = 0
const mockQuestion: Question = {
  category: 'Category',
  correctAnswer: false,
  difficulty: Difficulties.Easy,
  id: 'mock-id',
  incorrectAnswers: [true],
  question: 'Question',
  type: true,
}

describe('Test swipe gestures', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('Expect callback function to have been called after swipe gesture to left', async () => {
    const snapPointMock = jest.spyOn(ReactNativeRedash, 'snapPoint')
    snapPointMock.mockReturnValue(SNAP_POINTS[0])

    render(<Card index={mockIndex} item={mockQuestion} onFinish={mockFn} />)

    const gesture = getByGestureTestId('PanGesture')

    fireGestureHandler(gesture, [
      { state: State.END, translationX: 300, velocityX: 120 },
    ])

    await timeout(3000)
    expect(mockFn).toBeCalled()
  })

  test('Expect callback function to have been called after swipe gesture to right', async () => {
    const snapPointMock = jest.spyOn(ReactNativeRedash, 'snapPoint')
    snapPointMock.mockReturnValue(SNAP_POINTS[2])

    render(<Card index={mockIndex} item={mockQuestion} onFinish={mockFn} />)

    const gesture = getByGestureTestId('PanGesture')

    fireGestureHandler(gesture, [
      { state: State.END, translationX: 300, velocityX: 120 },
    ])

    await timeout(3000)
    expect(mockFn).toBeCalled()
  })

  test('Expect callback function to not have been called', async () => {
    const snapPointMock = jest.spyOn(ReactNativeRedash, 'snapPoint')
    snapPointMock.mockReturnValue(SNAP_POINTS[1])

    render(<Card index={mockIndex} item={mockQuestion} onFinish={mockFn} />)

    const gesture = getByGestureTestId('PanGesture')

    fireGestureHandler(gesture, [
      { state: State.END, translationX: 300, velocityX: 120 },
    ])

    await timeout(3000)
    expect(mockFn).toBeCalledTimes(0)
  })
})

test('Expect card to be rendered correctly', async () => {
  const renderedSnapshot = render(
    <Card index={mockIndex} item={mockQuestion} onFinish={mockFn} />,
  ).toJSON()

  expect(renderedSnapshot).toMatchSnapshot()
})
