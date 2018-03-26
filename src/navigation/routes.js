import { DrawerNavigator } from 'react-navigation'
import { Platform, StatusBar } from 'react-native'
import { isLogged } from 'services/firebase'
import Login from 'pages/login'
import Main from 'pages/main'

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
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  },
})
