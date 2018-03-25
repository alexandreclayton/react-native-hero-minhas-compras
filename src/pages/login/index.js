import React, { Component } from 'react'
import connect from 'react-redux'
import bindActionCreators from 'redux'
import { StatusBar, View, ActivityIndicator } from 'react-native'
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import { Actions as LoginActions } from 'store/ducks/login'
import styles from './styles'

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    login: PropTypes.shape({
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
      authenticating: PropTypes.bool.isRequired,
      logged: PropTypes.bool.isRequired,
    }).isRequired,
    onLoginUsernameChange: PropTypes.func.isRequired,
    onLoginPasswordChange: PropTypes.func.isRequired,
    onLoginAuth: PropTypes.func.isRequired,
    onLoginErrorValid: PropTypes.func.isRequired,
  };

  componentWillReceiveProps() {
    if (this.props.login.logged) {
      this.props.navigation.navigate('Main')
    }
  }

  singIn = () => {
    const { username, password } = this.props.login
    if (username && password) {
      this.props.onLoginAuth(username, password)
    } else {
      this.props.onLoginErrorValid('Usuário/Senha inválido!')
    }
  }

  render() {
    const {
      username,
      password,
      error,
      authenticating,
      logged,
    } = this.props.login

    return (
      <Container style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Content padder contentContainerStyle={styles.content}>
          <View style={styles.logoContent}>
            <Icon ios="ios-cart" android="md-cart" style={styles.logoIcon} />
            <Text style={styles.logoTitle}>Minhas Compras {logged}</Text>
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
                onChangeText={username => this.props.onLoginUsernameChange(username)}
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
                onChangeText={password => this.props.onLoginPasswordChange(password)}
              />
            </Item>
            {!!error && <Text style={styles.error}>{error}</Text>}
            <Button block style={styles.buttonEntrar} onPress={this.singIn}>
              {authenticating
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

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)
