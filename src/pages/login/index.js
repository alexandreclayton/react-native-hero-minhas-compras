import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base'
import { colors } from 'styles'
import styles from './styles'

export default class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    username: '',
    password: '',
    errorMessage: '',
  }

  render() {
    const {
      username,
      password,
      errorMessage
    } = this.state

    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.logo}>
          <Icon ios="ios-cart" android="md-cart" style={styles.logoIcon} />
          <Text style={styles.title}>Minhas Compras</Text>
        </View>
        <View style={styles.form}>
          <Item>
            <Icon name="md-person" style={styles.inputIcon} />
            <Input
              style={styles.input}
              placeholderTextColor={colors.textColor}
              placeholder="Usuário"
            />
          </Item>
          <Item>
            <Icon name="md-key" style={styles.inputIcon} />
            <Input
              style={styles.input}
              placeholderTextColor={colors.textColor}
              placeholder="Senha"
            />
          </Item>
          <Button block bordered light style={styles.buttonEntrar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Button>
          <Button transparent light full>
            <Text style={styles.buttonRecuperarText}>Recuperar senha</Text>
          </Button>
        </View>
      </Container >
    )
  }
}
