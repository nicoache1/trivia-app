import { RouteProp } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamList } from 'src/navigation/types'

type RouteConstraints = keyof ParamList

export const createRoutePropMock = <T extends RouteConstraints>(
  route: string,
) => {
  const mockRoute = {
    key: 'key',
    name: route,
  } as RouteProp<ParamList, T>
  return mockRoute
}

export const createNavigationPropMock = <T extends RouteConstraints>() => {
  const mockNavigation: NativeStackNavigationProp<ParamList, T, undefined> = {
    addListener: jest.fn(),
    canGoBack: jest.fn(),
    dispatch: jest.fn(),
    getId: jest.fn(),
    getParent: jest.fn(),
    getState: jest.fn(),
    goBack: jest.fn(),
    isFocused: jest.fn(),
    navigate: jest.fn(),
    pop: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
    removeListener: jest.fn(),
    replace: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
    setParams: jest.fn(),
  }

  return mockNavigation
}
