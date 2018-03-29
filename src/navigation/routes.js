import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'
import { isLogged } from 'services/firebase'
import { colors, metrics } from 'styles'

// Screens
import SignIn from 'screens/signin'
import SignUp from 'screens/signup'
import Main from 'screens/main'

// Components
import { Drawer } from 'components'

const LoginStack = StackNavigator({
  SingIn: { screen: SignIn },
  SingUp: { screen: SignUp },
}, {
  // Default config for all screens in login level
  navigationOptions: () => ({
    header: null,
  }),
})

const MainStack = StackNavigator({
  Main: { screen: Main },
}, {
  // Default config for all screens (in auth users)
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: colors.primaryColorDark,
      paddingHorizontal: metrics.basePadding,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>,
  }),
})

export default DrawerNavigator({
  LoginStack: {
    screen: LoginStack,
    navigationOptions: () => ({
      drawerLabel: () => null,
      drawerLockMode: 'locked-closed',
    }),
  },
  MainStack: { screen: MainStack },
}, {
  initialRouteName: (isLogged() ? 'MainStack' : 'LoginStack'),
  contentComponent: Drawer,
})
