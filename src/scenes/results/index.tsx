import { localization } from 'localization'
import React, { useLayoutEffect } from 'react'
import { Dimensions, FlatListProps, StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Path, Svg } from 'react-native-svg'
import { useSelector } from 'react-redux'

import { SceneContainer } from '../../components/SceneContainer'
import { StyledButton } from '../../components/StyledButton'
import { ButtonMode } from '../../components/StyledButton/ButtonMode'
import { StyledContainer } from '../../components/StyledContainer'
import { Routes } from '../../navigation/routes'
import { SceneProps } from '../../navigation/types'
import { useAppDispatch } from '../../store'
import { restartGameAction } from '../../store/storage/game'
import { selectGameConfiguration } from '../../store/storage/game/selectors'
import { useTheme } from '../../styles/Theme'
import { QuestionResult } from '../../types/questions'
import { Header } from './Header'
import { ResultItem } from './ResultItem'
import { ITEM_HEIGHT } from './ResultItem/styles'
import { styles } from './styles'

const { width, height } = Dimensions.get('window')

const renderItem: FlatListProps<QuestionResult>['renderItem'] = ({ item }) => (
  <ResultItem item={item} />
)

const keyExtractor: FlatListProps<QuestionResult>['keyExtractor'] = ({ id }) =>
  id

const getItemLayout: FlatListProps<QuestionResult>['getItemLayout'] = (
  _,
  index,
) => ({
  index,
  length: ITEM_HEIGHT,
  offset: ITEM_HEIGHT * index,
})

export const Results: SceneProps<Routes.Results> = ({ navigation }) => {
  const {
    Theme: { colors },
  } = useTheme()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [colors.WHITE, navigation])

  const dispatch = useAppDispatch()

  const game = useSelector(selectGameConfiguration)

  const onPressRestartGame = () => {
    dispatch(restartGameAction())
    navigation.reset({ index: 0, routes: [{ name: Routes.ConfigureGame }] })
  }

  const total = game.questionAmount.valueOf()
  const correctOnes = game.results.filter(item => item.correct).length

  return (
    <SceneContainer
      barStyle={'light-content'}
      style={[styles.container, { backgroundColor: colors.SECONDARY }]}>
      <View style={{ ...StyleSheet.absoluteFillObject }}>
        <Svg width={width} height={height} viewBox="0 0 375 812" fill="none">
          <Path
            d="M-382.5 612.5L-835 243.5V948.5H834V264.5L487 673L39.5 -76L-382.5 612.5Z"
            fill="#142664"
            fillOpacity="0.4"
          />
        </Svg>
      </View>
      <FlatList
        ListHeaderComponent={<Header total={total} correctOnes={correctOnes} />}
        data={game.results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
      />
      <StyledContainer style={styles.footer}>
        <StyledButton
          mode={ButtonMode.DARK}
          label={localization('restartGameLabel')}
          onPress={onPressRestartGame}
        />
      </StyledContainer>
    </SceneContainer>
  )
}
