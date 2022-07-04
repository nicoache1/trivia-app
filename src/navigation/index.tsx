import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import { AnimatedSplash } from '../scenes/animatedSplash'
import { ConfigureGame } from '../scenes/configureGame'
import { Game } from '../scenes/game'
import { Results } from '../scenes/results'
import { Welcome } from '../scenes/welcome'
import { Routes } from './routes'
import { ParamList } from './types'

const Stack = createNativeStackNavigator<ParamList>()

export const AppNavigator: React.FC<{}> = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name={Routes.AnimatedSplash} component={AnimatedSplash} />
      <Stack.Screen
        name={Routes.Welcome}
        component={Welcome}
        options={{ presentation: 'modal' }}
      />
      <Stack.Screen name={Routes.ConfigureGame} component={ConfigureGame} />
      <Stack.Screen name={Routes.Game} component={Game} />
      <Stack.Screen name={Routes.Results} component={Results} />
    </Stack.Navigator>
  )
}
