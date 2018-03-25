import { StackNavigator } from 'react-navigation'
import { isLogged } from 'services/firebase'
// Pages
import Login from 'pages/login'
import Main from 'pages/main'
// Styles
import { metrics } from 'styles'

export default StackNavigator({
  Login: { screen: Login },
  Main: { screen: Main },
}, {
  initialRouteName: (isLogged() ? 'Main' : 'Login'),
  navigationOptions: () => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
  }),
})
