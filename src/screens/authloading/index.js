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
    login: PropTypes.shape().isRequired,
    onLogged: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const { user } = this.props.login
    const { params } = this.props.navigation.state
    const login = (params ? params.login : null)
    const userData = JSON.parse(await AsyncStorage.getItem(storages.STORAGE_USER))
    let routeAction = null

    switch (login) {
      case 'success':
        await AsyncStorage.setItem(storages.STORAGE_USER, JSON.stringify(user))
        routeAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate(routes.MAIN_SCREEN.route),
          ],
        })
        break
      case 'logout':
        await AsyncStorage.removeItem(storages.STORAGE_USER)
        routeAction = NavigationActions.navigate(routes.LOGINAPP_STACK.route)
        break
      default:
        if (userData) {
          this.props.onLogged(userData)
          routeAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate(routes.MAIN_SCREEN.route),
            ],
          })
        } else {
          routeAction = NavigationActions.navigate(routes.LOGINAPP_STACK.route)
        }
    }

    // Dispatch route
    this.props.navigation.dispatch(routeAction)
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

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
