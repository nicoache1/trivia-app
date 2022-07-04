import { Difficulties, Game, QuestionAmounts } from '../../../types/game'

export interface GameState extends Game {}

export const initialState: GameState = {
  difficulty: Difficulties.Easy,
  player: 'Player',
  questionAmount: QuestionAmounts.Five,
  results: [],
}
