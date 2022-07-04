import { AnyAction, isFulfilled, isPending, isRejected } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'

export const providesList = <
  R extends { id: string | number }[],
  T extends string,
>(
  resultsWithIds: R | undefined,
  tagType: T,
) => {
  return resultsWithIds
    ? [
        { id: 'LIST', type: tagType },
        ...resultsWithIds.map(({ id }) => ({ id, type: tagType })),
      ]
    : [{ id: 'LIST', type: tagType }]
}

const hasPrefix = (action: AnyAction, prefix: string) =>
  action.type.startsWith(prefix)

export const isPendingAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isPending(action)
  }

export const isRejectedAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isRejected(action)
  }

export const isFulfilledAction =
  (prefix: string) =>
  (action: AnyAction): action is AnyAction => {
    return hasPrefix(action, prefix) && isFulfilled(action)
  }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (
  error: unknown,
): QueryReturnValue<any, FetchBaseQueryError, any> => ({
  data: undefined,
  error: {
    error: error instanceof Error ? error.message : 'Unknown error',
    status: 'FETCH_ERROR',
  },
})
