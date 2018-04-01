import React, { Component } from 'react'
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
} from 'native-base'
import { isLogged, getUserLogged } from 'lib/firebase'
import { route } from 'lib/navigation'
import styles from './styles'

const itensMenu = Object.values(route)

class Drawer extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }

  nav = (router) => {
    const { navigation } = this.props
    navigation.navigate(router)
  }

  renderItem = (data) => {
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
    const { email = '' } = isLogged() ? getUserLogged() : ''
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body>
            <TouchableOpacity onPress={() => null}>
              <View style={styles.drawerImage} >
                <Icon ios="md-person" android="md-person" style={styles.drawerImageDefault} />
              </View>
            </TouchableOpacity>
            <Text style={styles.drawerName}>{email}</Text>
          </Body>
        </Header>
        <Content bounces={false} style={styles.content}>
          <ScrollView>
            <List
              dataArray={itensMenu}
              renderRow={data => this.renderItem(data)}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

export default Drawer
