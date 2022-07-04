import { ParamListBase } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

import { Routes } from './routes'

export interface ParamList extends ParamListBase {
  [Routes.Welcome]: undefined
  [Routes.ConfigureGame]: undefined
  [Routes.Game]: undefined
  [Routes.Results]: undefined
  [Routes.AnimatedSplash]: undefined
}

export type SceneProps<T extends keyof ParamList> = React.FC<
  NativeStackScreenProps<ParamList, T>
>

export type NavigationProp<T extends keyof ParamList> = NativeStackScreenProps<
  ParamList,
  T
>['navigation']
