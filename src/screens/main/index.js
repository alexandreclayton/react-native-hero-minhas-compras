import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import {
  Container,
  Content,
  Text,
} from 'native-base'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import styles from './styles'

const Main = () => (
  <Container style={styles.container}>
    <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
    <Content padder contentContainerStyle={styles.content}>
      <View><Text>MINHAS COMPRAS LIST</Text></View>
    </Content>
  </Container>
)

Main.navigationOptions = {
  title: 'Minhas Compras',
}
/*
Product.propTypes = {
  navigation: PropTypes.shape().isRequired,
}
*/

export default Main
/*
class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }

  static navigationOptions = {
    title: 'Minhas Compras',
  }

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
        <Content padder contentContainerStyle={styles.content}>
          <View><Text>LISTA</Text></View>
        </Content>
      </Container>
    )
  }
}

export default Main // connect(mapStateToProps)(Main)

*/
