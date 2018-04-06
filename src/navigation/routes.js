import React from 'react'
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation'
import { colors } from 'styles'

// Screens
import AuthLoadingScreen from 'screens/authloading'
import SignIn from 'screens/signin'
import SignUp from 'screens/signup'
import Main from 'screens/main'
import Product from 'screens/product'
import CategoriaScreen from 'screens/categoria'

// Routes
import { routes } from 'lib/navigation'

// Components
import { SiderBarCustom, HeaderLeft } from 'components'

const LoginNavApp = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, {
  navigationOptions: () => ({
    header: null,
  }),
})

const RootNavApp = StackNavigator({
  MainScreen: { screen: Main },
  ProductScreen: { screen: Product },
  CategoryScreen: { screen: CategoriaScreen },
}, {
  initialRouteName: routes.MAIN_SCREEN.route.routeName,
  navigationOptions: ({ navigation }) => (
    {
      headerStyle: {
        backgroundColor: colors.primaryColorDark,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
      headerLeft: <HeaderLeft navigation={navigation} />,
    }),
})

const DrawerNavApp = DrawerNavigator({
  RootNavApp,
}, {
  initialRouteName: routes.ROOTAPP_STACK.route.routeName,
  contentComponent: SiderBarCustom,
})

const SwitchNavApp = SwitchNavigator({
  AuthLoadingScreen,
  DrawerNavApp,
  LoginNavApp,
}, {
  initialRouteName: routes.AUTH_SCREEN.route.routeName,
})

export default SwitchNavApp
