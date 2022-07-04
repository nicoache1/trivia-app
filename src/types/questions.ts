import { v4 as uuid } from 'uuid'

import { Difficulties } from './game'

export interface Question {
  category: string
  correctAnswer: boolean
  difficulty: Difficulties
  incorrectAnswers: boolean[]
  question: string
  type: boolean
  id: string
}

export interface QuestionResult {
  question: Question
  correct: boolean
  id: string
}

export const deserializer = (data: any): Question => ({
  category: decodeURIComponent(data.category),
  correctAnswer: data.correct_answer.toLowerCase() === 'true',
  difficulty: data.difficulty,
  id: uuid(),
  incorrectAnswers: data.incorrect_answers,
  question: decodeURIComponent(data.question),
  type: data.type,
})
