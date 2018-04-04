import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import {
  Container,
  Content,
  List,
  ListItem,
  Left,
  View,
  Text,
  Icon,
  Thumbnail,
  Button,
} from 'native-base'
import { Actions as LoginActions } from 'store/ducks/login'
import { routes } from 'lib/navigation'
import styles from './styles'

// Parser Object => Array
const routeItems = Object.values(routes)

class SiderBarCustom extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    login: PropTypes.shape().isRequired,
    onLogOut: PropTypes.func.isRequired,
  }

  nav = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }

  drawerItems = (data) => {
    if (!data.iosIcon) return null
    return (
      <ListItem
        button
        noBorder
        onPress={() => this.nav(data.route)}
      >
        <Left>
          <Icon
            active
            ios={data.iosIcon}
            android={data.mdIcon}
            style={styles.drawerItem}
          />
          <Text style={styles.text}>{data.title}</Text>
        </Left>
      </ListItem>
    )
  }

  render() {
    const { user } = this.props.login
    return (
      <Container>
        <View style={styles.drawerHeader}>
          <Thumbnail large source={require('assets/noimage.png')} />
          <Text style={styles.drawerTextUserName}>{user.email}</Text>
        </View>
        <Content>
          <List
            dataArray={routeItems}
            renderRow={data => this.drawerItems(data)}
          />
        </Content>
        <Button
          iconLeft
          danger
          full
          onPress={() => this.props.onLogOut()}
        >
          <Icon name="log-out" />
          <Text>Sair</Text>
        </Button>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
})

const mapDispatchToProps = dispatch => bindActionCreators(LoginActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SiderBarCustom)
