import { StackNavigator } from 'react-navigation'
// Pages
import Login from 'pages/login'
import Main from 'pages/main'
// Styles
import { metrics } from 'styles'

const createNavigator = (isLogged = false) =>
  StackNavigator({
    Login: { screen: Login },
    Main: { screen: Main },
  }, {
    initialRouteName: isLogged ? 'Login' : 'Main',
    navigationOptions: () => ({
      headerStyle: {
        paddingHorizontal: metrics.basePadding,
      },
    }),
  })

export default createNavigator
