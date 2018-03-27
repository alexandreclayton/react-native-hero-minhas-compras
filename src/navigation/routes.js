import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Text } from 'react-native'
import { isLogged } from 'services/firebase'
import { colors, metrics } from 'styles'

import Login from 'pages/login'
import Main from 'pages/main'


// Main DrawerStack
const contentDrawer = DrawerNavigator({ screen: Main })
const DrawerNavigation = StackNavigator({ DrawerStack: contentDrawer }, {
  headerMode: 'float',
  navigationOptions: ({ navigation }) => ({
    title: 'Logged In to your app!',
    headerLeft: <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>,
  }),
})
// Login Stack
const LoginStack = StackNavigator({
  SingIn: { screen: Login },
  SingUp: { screen: Login, navigationOptions: { title: 'Nova Conta' } },
}, { headerMode: 'float' })

// Root Stack Navigation
export default StackNavigator({
  loginStack: { screen: LoginStack },
  drawerStack: { screen: DrawerNavigation },
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'loginStack',
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: colors.primaryColorDark,
      paddingHorizontal: metrics.basePadding,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  }),
})

/*
export default DrawerNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      drawerLabel: () => null,
      drawerLockMode: 'locked-closed',
    }),
  },
  Main: { screen: Main },
}, {
  initialRouteName: (isLogged() ? 'Main' : 'Login'),
})
*/
