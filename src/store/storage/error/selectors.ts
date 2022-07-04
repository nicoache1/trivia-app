import { createSelector } from '@reduxjs/toolkit'

import { ReduxState } from '../../rootReducer'
import { ErrorState } from './types'

const selectErrorStateTree = (state: ReduxState): ErrorState => state.error

export const selectErrorMessage = createSelector(
  selectErrorStateTree,
  (errorState: ErrorState) => errorState.message,
)
