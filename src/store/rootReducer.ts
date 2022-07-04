import { combineReducers } from 'redux'

import { baseApiReducer, baseApiReducerPath } from './APIs/questions'
import { errorReducer } from './storage/error'
import { gameReducer } from './storage/game'

export const rootReducer = combineReducers({
  [baseApiReducerPath]: baseApiReducer,
  error: errorReducer,
  game: gameReducer,
})

export type ReduxState = ReturnType<typeof rootReducer>
