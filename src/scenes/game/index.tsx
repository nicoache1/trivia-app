import CheckImage from 'assets/check.png'
import CrossImage from 'assets/cross.png'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import { Background } from 'src/components/Background'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledContainer } from 'src/components/StyledContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useAppDispatch } from 'src/store'
import { useLazyQuestionsQuery } from 'src/store/APIs/questions'
import { setGameResultAction } from 'src/store/storage/game'
import { selectGameConfiguration } from 'src/store/storage/game/selectors'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { Question } from 'src/types/questions'
import { v4 as uuidv4 } from 'uuid'

import { Card } from './Card'
import { FinishGame } from './FinishGame'
import { GameButton } from './GameButton'
import { styles } from './styles'

export const Game: SceneProps<Routes.Game> = ({ navigation }) => {
  const game = useSelector(selectGameConfiguration)
  const {
    Theme: { colors },
  } = useTheme()
  const dispatch = useAppDispatch()
  const [triggerQuery, { isLoading, isFetching }] = useLazyQuestionsQuery()

  const ref = useRef<{
    triggerAnimation: (option: boolean) => void
  }>(null)

  const [cards, setCards] = useState<Question[]>([])

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  useEffect(() => {
    async function getQuestions() {
      const data = await triggerQuery({
        amount: game.questionAmount,
        difficulty: game.difficulty,
      }).unwrap()
      setCards(data)
    }

    getQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onFinish = (option: boolean) => {
    const question = cards[cards.length - 1]

    dispatch(
      setGameResultAction({
        results: [
          {
            correct: question.correctAnswer === option,
            id: uuidv4(),
            question,
          },
        ],
      }),
    )

    setCards(prevState => {
      return prevState.slice(0, prevState.length - 1)
    })
  }

  const onPressButton = (option: boolean) => () => {
    ref.current?.triggerAnimation(option)
  }

  const finishGame = cards.length === 0 && !isLoading && !isFetching

  const finishCallback = () => navigation.navigate(Routes.Results)

  return (
    <>
      {finishGame && <FinishGame callback={finishCallback} />}
      <SceneContainer
        barStyle={'light-content'}
        style={[styles.container, { backgroundColor: colors.SECONDARY }]}>
        <Background />
        <StyledContainer style={styles.playerContainer}>
          <StyledText color={ColorPalette.WHITE} typography={AppTypography.H1}>
            {game.player}
          </StyledText>
        </StyledContainer>
        <View style={styles.cardContainer}>
          {cards.map((item, index) => (
            <Card
              ref={index === cards.length - 1 ? ref : undefined}
              key={item.id}
              item={item}
              index={index}
              onFinish={onFinish}
            />
          ))}
        </View>
        <StyledContainer style={styles.answerOptionContainer}>
          <GameButton imageSource={CheckImage} onPress={onPressButton(true)} />
          <GameButton imageSource={CrossImage} onPress={onPressButton(false)} />
        </StyledContainer>
      </SceneContainer>
    </>
  )
}
