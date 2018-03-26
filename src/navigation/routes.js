import { StackNavigator } from 'react-navigation'
import { colors, metrics } from 'styles'
import { isLogged } from 'services/firebase'
import Login from 'pages/login'
import Main from 'pages/main'

export default StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
}, {
  initialRouteName: (isLogged() ? 'Main' : 'Login'),
  navigationOptions: () => ({
    headerStyle: {
      backgroundColor: colors.primaryColorDark,
      paddingHorizontal: metrics.basePadding,
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  }),
})
