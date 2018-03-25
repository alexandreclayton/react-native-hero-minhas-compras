import { StackNavigator } from 'react-navigation'
import { metrics } from 'styles'
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
      paddingHorizontal: metrics.basePadding,
    },
  }),
})
