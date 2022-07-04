import { PayloadAction } from '@reduxjs/toolkit'

import { QuestionResult } from '../../../types/questions'
import { GameState, initialState } from './types'

export const restartGame = (state: GameState) => {
  state.difficulty = initialState.difficulty
  state.questionAmount = initialState.questionAmount
  state.player = initialState.player
  state.results = []
}

export const setGame = (state: GameState, action: PayloadAction<GameState>) => {
  state.difficulty = action.payload.difficulty
  state.player = action.payload.player
  state.questionAmount = action.payload.questionAmount
}

export const setGameResult = (
  state: GameState,
  action: PayloadAction<{ results: QuestionResult[] }>,
) => {
  state.results = [...state.results, ...action.payload.results]
}
