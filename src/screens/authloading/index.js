import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
    const userData = JSON.parse(await AsyncStorage.getItem('@MinhasCompras:user'))
    if (userData) {
      this.props.onLogged(userData)
    }
    this.props.navigation.navigate(userData ? routes.MAIN_SCREEN.route : routes.SIGNIN_SCREEN.route)
  }

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(null, mapDispatchToProps)(AuthLoadingScreen)
