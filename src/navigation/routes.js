import React from 'react'
import { StackNavigator, DrawerNavigator, SwitchNavigator } from 'react-navigation'
import { colors, metrics } from 'styles'

// Screens
import AuthLoadingScreen from 'screens/authloading'
import SignIn from 'screens/signin'
import SignUp from 'screens/signup'
import Main from 'screens/main'
import Product from 'screens/product'
import Category from 'screens/category'

// Routes
import { routes } from 'lib/navigation'

// Components
import { SiderBar, HeaderLeft } from 'components'

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
  CategoryScreen: { screen: Category },
}, {
  initialRouteName: routes.MAIN_SCREEN.route.routeName,
  navigationOptions: ({ navigation }) => (
    {
      headerStyle: {
        backgroundColor: colors.primaryColorDark,
      },
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
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
  contentComponent: SiderBar,
})

const SwitchNavApp = SwitchNavigator({
  AuthLoadingScreen,
  DrawerNavApp,
  LoginNavApp,
}, {
  initialRouteName: routes.AUTH_SCREEN.route.routeName,
})

export default SwitchNavApp
