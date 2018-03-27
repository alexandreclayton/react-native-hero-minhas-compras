import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Platform, StatusBar } from 'react-native'
import { isLogged } from 'services/firebase'
import { colors, metrics } from 'styles'

import Login from 'pages/login'
import Main from 'pages/main'

export default StackNavigator({
  Login: { screen: Login },
  Main: DrawerNavigator({ screen: Main }),
}, {
  initialRouteName: 'Main',
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
