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
        <View style={styles.logoContent}>
          <Icon ios="ios-cart" android="md-cart" style={styles.logoIcon} />
          <Text style={styles.logoTitle}>Minhas Compras</Text>
        </View>
        <View style={styles.formContent}>
          <Item>
            <Icon name="md-person" style={styles.inputIcon} />
            <Input
              style={styles.input}
              placeholderTextColor={colors.textColor}
              placeholder="Usuário"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          </Item>
          <Item>
            <Icon name="md-key" style={styles.inputIcon} />
            <Input
              style={styles.input}
              placeholderTextColor={colors.textColor}
              placeholder="Senha"
              secureTextEntry
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </Item>
          <Button block bordered light style={styles.buttonEntrar}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Button>
          <Button transparent light full>
            <Text style={styles.buttonText}>Recuperar senha</Text>
          </Button>
        </View>
      </Container >
    )
  }
}
