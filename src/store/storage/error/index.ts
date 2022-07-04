import { createSlice } from '@reduxjs/toolkit'

import { clearError, setError } from './actions'
import { initialState } from './types'

const errorSlice = createSlice({
  initialState,
  name: 'error',
  reducers: {
    clearErrorAction: clearError,
    setErrorAction: setError,
  },
})

export const {
  actions: { clearErrorAction, setErrorAction },
  reducer: errorReducer,
} = errorSlice
