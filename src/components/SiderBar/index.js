import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import {
  Container,
  Header,
  Body,
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
import { routes } from 'lib/navigation'
import { colors } from 'styles'
import styles from './styles'

// Parser Object => Array
const routeItems = Object.values(routes)

class Drawer extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    login: PropTypes.shape().isRequired,
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
          <View style={styles.drawerImage}>
            <Button transparent >
              <Thumbnail large source={require('assets/noimage.png')} />
            </Button>
          </View>
          <Text style={styles.drawerName}>{user.email}</Text>
        </View>
        <Content>
          <List
            dataArray={routeItems}
            renderRow={data => this.drawerItems(data)}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  login: state.login,
})

export default connect(mapStateToProps)(Drawer)
