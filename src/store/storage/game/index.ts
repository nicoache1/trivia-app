import { createSlice } from '@reduxjs/toolkit'

import { restartGame, setGame, setGameResult } from './actions'
import { initialState } from './types'

const gameSlice = createSlice({
  initialState,
  name: 'game',
  reducers: {
    restartGameAction: restartGame,
    setGameAction: setGame,
    setGameResultAction: setGameResult,
  },
})

export const {
  actions: { restartGameAction, setGameAction, setGameResultAction },
  reducer: gameReducer,
} = gameSlice
