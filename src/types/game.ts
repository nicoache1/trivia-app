import { QuestionResult } from './questions'

export enum Difficulties {
  Easy = 'easy',
  Medium = 'medium',
  Hard = 'hard',
}

export enum QuestionAmounts {
  Five = 5,
  Ten = 10,
  TwentyFive = 25,
}

export const getDifficulties = () => Object.values(Difficulties)
export const getQuestionAmounts = () =>
  Object.values(QuestionAmounts).filter(Number) as QuestionAmounts[]

export interface Game {
  player: string
  difficulty: Difficulties
  questionAmount: QuestionAmounts
  results: QuestionResult[]
}
