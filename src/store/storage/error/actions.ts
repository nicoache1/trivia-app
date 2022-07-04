import { PayloadAction } from '@reduxjs/toolkit'

import { ErrorState } from './types'

export const clearError = (state: ErrorState) => {
  state.message = undefined
}

export const setError = (state: ErrorState, action: PayloadAction<string>) => {
  state.message = action.payload
}
