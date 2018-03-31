import React, { Component } from 'react'
import {
  Container,
  Content,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import styles from './styles'

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }

  static navigationOptions = {
    title: 'Minhas Compras',
    headerMode: 'float',
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
