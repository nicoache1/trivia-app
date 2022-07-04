import type { PreloadedState } from '@reduxjs/toolkit'
import type { RenderOptions } from '@testing-library/react'
import React from 'react'
import { Provider } from 'react-redux'
import { AppStore, RootState, setupStore } from 'src/store'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderWithProvider(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
  }: ExtendedRenderOptions = {},
) {
  return <Provider store={store}>{ui}</Provider>
}
