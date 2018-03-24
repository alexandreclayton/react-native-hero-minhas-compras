import React, { Component } from 'react'
import { StatusBar, View, ActivityIndicator } from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
  Footer,
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
    loading: false,
  }

  singIn = () => {
    this.setState({ loading: !this.state.loading })
  }

  render() {
    const {
      username,
      password,
      errorMessage,
      loading,
    } = this.state

    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Content padder contentContainerStyle={styles.content}>
          <View style={styles.logoContent}>
            <Icon ios="ios-cart" android="md-cart" style={styles.logoIcon} />
            <Text style={styles.logoTitle}>Minhas Compras</Text>
          </View>
          <View style={styles.formContent}>
            <Item>
              <Icon name="md-person" style={styles.inputIcon} />
              <Input
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={colors.textColor}
                placeholder="Usuário"
                value={username}
                onChangeText={username => this.setState({ username })}
              />
            </Item>
            <Item>
              <Icon name="md-key" style={styles.inputIcon} />
              <Input
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                placeholderTextColor={colors.textColor}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            {!!errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
            <Button block style={styles.buttonEntrar} onPress={this.singIn}>
              {loading
                ? <ActivityIndicator size="small" color={colors.textColor} />
                : <Text style={styles.buttonText}>Entrar</Text>}
            </Button>
          </View>
          <View style={styles.footerContent}>
            <Button transparent light>
              <Text style={styles.buttonText}>Criar uma conta</Text>
            </Button>
          </View>
        </Content>
      </Container >
    )
  }
}
