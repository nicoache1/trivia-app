import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
  PreloadedState,
} from '@reduxjs/toolkit'
import { localization } from 'localization'
import { useDispatch } from 'react-redux'

import { baseApi } from './APIs/questions'
import { rootReducer } from './rootReducer'
import { setErrorAction } from './storage/error'

const middlewares: Middleware[] = [baseApi.middleware]

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      api.dispatch(
        setErrorAction(
          action?.error?.data?.message ?? localization('errorMessage'),
        ),
      )
    }

    return next(action)
  }

middlewares.push(rtkQueryErrorLogger)

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
    preloadedState,
    reducer: rootReducer,
  })
}

const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
export const useAppDispatch = () => useDispatch<AppDispatch>()

export { store }
