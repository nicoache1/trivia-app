import ConfigureImage from 'assets/configure.png'
import { localization } from 'localization'
import React, { useLayoutEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { Dimensions, Image, View } from 'react-native'
import { Background } from 'src/components/Background'
import { SceneContainer } from 'src/components/SceneContainer'
import { StyledButton } from 'src/components/StyledButton'
import { ButtonMode } from 'src/components/StyledButton/ButtonMode'
import { StyledContainer } from 'src/components/StyledContainer'
import { StyledText } from 'src/components/StyledText'
import { Routes } from 'src/navigation/routes'
import { SceneProps } from 'src/navigation/types'
import { useAppDispatch } from 'src/store'
import { setGameAction } from 'src/store/storage/game'
import { useTheme } from 'src/styles/Theme'
import { AppTypography, ColorPalette } from 'src/styles/types'
import { Game, getDifficulties, getQuestionAmounts } from 'src/types/game'

import { renderInputControl, renderSegmentedControl } from './formRenders'
import { styles } from './styles'
import { ConfigureGameForm } from './types'

const { width, height } = Dimensions.get('window')

export const ConfigureGame: SceneProps<Routes.ConfigureGame> = ({
  navigation,
}) => {
  const {
    Theme: { colors },
  } = useTheme()

  const dispatch = useAppDispatch()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation])

  const { control, handleSubmit } = useForm<ConfigureGameForm>({
    defaultValues: {
      amount: 0,
      difficulty: 0,
      name: localization('defaultName'),
    },
  })

  const difficulties = getDifficulties()
  const questions = getQuestionAmounts()

  const onSubmit = (data: ConfigureGameForm) => {
    const newGame: Game = {
      difficulty: difficulties[data.difficulty],
      player: data.name,
      questionAmount: questions[data.amount],
      results: [],
    }
    dispatch(setGameAction(newGame))
    navigation.navigate(Routes.Game)
  }

  return (
    <View
      style={[styles.screenContainer, { backgroundColor: colors.SECONDARY }]}>
      <SceneContainer style={styles.scene} barStyle={'light-content'}>
        <View style={styles.headerContainer}>
          <Background />
          <Image
            source={ConfigureImage}
            style={{ height: height / 2.5, width: width * 0.9 }}
            resizeMode={'contain'}
          />
          <View style={styles.textContainer}>
            <StyledText
              color={ColorPalette.TERTIARY}
              typography={AppTypography.H1}>
              {localization('configureTitle1')}
            </StyledText>
            <StyledText
              color={ColorPalette.WHITE}
              typography={AppTypography.H1}>
              {localization('configureTitle2')}
            </StyledText>
          </View>
        </View>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={renderInputControl}
            name={'name'}
          />
          <StyledContainer>
            <View style={styles.subtitle}>
              <StyledText
                color={ColorPalette.WHITE}
                typography={AppTypography.P1_BOLD}>
                {localization('difficultyLabel')}
              </StyledText>
            </View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={renderSegmentedControl<'difficulty'>(
                difficulties,
                colors.WHITE,
              )}
              name={'difficulty'}
            />
          </StyledContainer>
          <StyledContainer>
            <View style={styles.subtitle}>
              <StyledText
                color={ColorPalette.WHITE}
                typography={AppTypography.P1_BOLD}>
                {localization('questionAmountLabel')}
              </StyledText>
            </View>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={renderSegmentedControl<'amount'>(
                questions.map(item => `${item}`),
                colors.WHITE,
              )}
              name={'amount'}
            />
          </StyledContainer>
        </View>
        <StyledContainer style={styles.buttonContainer}>
          <StyledButton
            mode={ButtonMode.DARK}
            label={localization('getStartedLabel')}
            onPress={handleSubmit(onSubmit)}
          />
        </StyledContainer>
      </SceneContainer>
    </View>
  )
}
