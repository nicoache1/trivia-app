import { createSelector } from '@reduxjs/toolkit'

import { ReduxState } from '../../rootReducer'
import { GameState } from './types'

const selectGameStateTree = (state: ReduxState): GameState => state.game

export const selectGameConfiguration = createSelector(
  selectGameStateTree,
  (game: GameState) => game,
)
