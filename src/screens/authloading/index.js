import React from 'react'
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native'
import PropTypes from 'prop-types'
import { isLogged } from 'lib/firebase'
import styles from './styles'

class AuthLoadingScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }

  constructor(props) {
    super(props)
    this.bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(isLogged() ? 'Root' : 'Auth')
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen
