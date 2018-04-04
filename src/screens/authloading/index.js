import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { NavigationActions } from 'react-navigation'
import {
  ActivityIndicator,
  StatusBar,
  View,
  AsyncStorage,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions as LoginActions } from 'store/ducks/login'
import { colors } from 'styles'
import { routes } from 'lib/navigation'
import { storages } from 'lib/syncstorage'
import styles from './styles'

class AuthLoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    onLogged: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    let resetAction = NavigationActions.navigate(routes.LOGINAPP_STACK.route)
    const userData = JSON.parse(await AsyncStorage.getItem(storages.STORAGE_USER))
    if (userData) {
      this.props.onLogged(userData)
      resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate(routes.MAIN_SCREEN.route),
        ],
      })
    }
    // Dispatch route
    this.props.navigation.dispatch(resetAction)
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
        <ActivityIndicator />
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(null, mapDispatchToProps)(AuthLoadingScreen)
