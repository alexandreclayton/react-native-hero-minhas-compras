import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  ActivityIndicator,
  StatusBar,
  View,
  Text,
  AsyncStorage,
} from 'react-native'
import PropTypes from 'prop-types'
import { Actions as LoginActions } from 'store/ducks/login'
import { colors } from 'styles'
import { routes } from 'lib/navigation'
import styles from './styles'

class AuthLoadingScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    onLogged: PropTypes.func.isRequired,
    login: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    const userData = JSON.parse(await AsyncStorage.getItem('@MinhasCompras:user'))
    if (userData) {
      this.props.onLogged(userData)
    }
    this.props.navigation.navigate(userData ? routes.MAIN_SCREEN.route : routes.SIGNIN_SCREEN.route)
  }

  // Render any loading content that you like here
  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
        <ActivityIndicator />
        <Text style={styles.text}>
          {login.authenticating ? 'Authenticating' : 'Authenticated'}
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen)
