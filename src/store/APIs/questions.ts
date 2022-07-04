import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Constants from 'expo-constants'

import { deserializer, Question } from '../../types/questions'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: Constants.manifest?.extra?.apiHost }),
  endpoints: builder => ({
    questions: builder.query<
      Question[],
      { amount: number; difficulty: string }
    >({
      providesTags: ['Questions'],
      query: ({ amount, difficulty }) => ({
        params: {
          amount,
          difficulty: difficulty,
          encode: 'url3986',
          type: 'boolean',
        },
        url: `api.php`,
      }),
      transformResponse: (data: any) => {
        const results = data?.results ?? []
        const parsedQuestions = results.map((item: any) => deserializer(item))
        return parsedQuestions
      },
    }),
  }),
  reducerPath: 'baseApi',
  tagTypes: ['Questions'],
})

export const {
  useLazyQuestionsQuery,
  useQuestionsQuery,
  reducer: baseApiReducer,
  reducerPath: baseApiReducerPath,
} = baseApi
