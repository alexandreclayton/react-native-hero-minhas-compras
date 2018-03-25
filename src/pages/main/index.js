import React, { Component } from 'react'
import {
  Container,
  Content,
  Item,
  Input,
  Button,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import styles from './styles'

class Main extends Component {
  static navigationOptions = {
    title: 'Minhas Compras',
    headerBackTitle: null,
  };

  render() {
    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Content padder contentContainerStyle={styles.content}>
          <View><Text>LISTA</Text></View>
        </Content>
      </Container>
    )
  }
}

export default Main
