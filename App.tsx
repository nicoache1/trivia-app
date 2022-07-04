import 'react-native-get-random-values'

import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'

import { navigationRef } from './src/common/navigation'
import { AppNavigator } from './src/navigation'
import { store } from './src/store'
import { ThemeProvider } from './src/styles/Theme'

SplashScreen.preventAutoHideAsync()

export default function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider store={store}>
        <NavigationContainer ref={navigationRef}>
          <ThemeProvider>
            <AppNavigator />
          </ThemeProvider>
        </NavigationContainer>
      </ReduxProvider>
    </SafeAreaProvider>
  )
}
