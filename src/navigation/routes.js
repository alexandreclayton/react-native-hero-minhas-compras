import React from 'react'
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation'
import { Text } from 'react-native'
import { colors, metrics } from 'styles'

// Screens
import AuthLoadingScreen from 'screens/authloading'
import SignIn from 'screens/signin'
import SignUp from 'screens/signup'
import Main from 'screens/main'


// Components
import { Drawer } from 'components'

const LoginAppStack = StackNavigator(
  {
    SingIn: { screen: SignIn },
    SingUp: { screen: SignUp },
  }, {
    // Default config for all screens in login level
    navigationOptions: () => ({
      header: null,
    }),
  })

const MainAppStack = StackNavigator(
  {
    MainScreen: { screen: Main },
  }, {
    navigationOptions: ({ navigation }) => (
      {
        headerStyle: {
          backgroundColor: colors.primaryColorDark,
          paddingHorizontal: metrics.basePadding,
        },
        headerTintColor: colors.white,
        headerBackTitle: null,
        headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>,
      }),
  })

const RootAppStack = DrawerNavigator(
  {
    MainAppStack,
  }, {
    contentComponent: Drawer,
  })

export default SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: LoginAppStack,
    RootApp: RootAppStack,
  }, {
    initialRouteName: 'AuthLoading',
  })
