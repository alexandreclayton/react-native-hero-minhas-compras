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

// Components
import { Drawer, HeaderLeft } from 'components'

const LoginAppStack = StackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
}, {
  navigationOptions: () => ({
    header: null,
  }),
})

const MainAppStack = StackNavigator({
  MainScreen: { screen: Main },
  ProductScreen: { screen: Product },
  CategoryScreen: { screen: Category },
}, {
  initialRouteName: 'MainScreen',
  headerMode: 'screen',
  navigationOptions: ({ navigation }) => (
    {
      headerStyle: {
        backgroundColor: colors.primaryColorDark,
        paddingHorizontal: metrics.basePadding,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
      headerLeft: <HeaderLeft navigation={navigation} />,
    }),
})

const RootAppStack = DrawerNavigator({
  MainAppStack: { screen: MainAppStack },
}, {
  contentComponent: Drawer,
})

const SwitchApp = SwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  LoginAppStack,
  RootAppStack,
}, {
  initialRouteName: 'AuthLoading',
})

export default SwitchApp
