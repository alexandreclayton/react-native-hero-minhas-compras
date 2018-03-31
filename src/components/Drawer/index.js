import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView, TouchableOpacity } from 'react-native'
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
import PropTypes from 'prop-types'
import { isLogged, getUserLogged } from 'lib/firebase'
import styles from './styles'

const dataMenu = [
  {
    title: 'Minhas Compras',
    route: 'RootApp',
    iosIcon: 'ios-clipboard',
    mdIcon: 'md-clipboard',
  },
  {
    title: 'Categorias',
    route: 'CategoryScreen',
    iosIcon: 'ios-list',
    mdIcon: 'md-list',
  },
  {
    title: 'Produtos',
    route: 'ProductScreen',
    iosIcon: 'ios-barcode',
    mdIcon: 'md-barcode',
  },
  {
    title: 'Sair',
    route: 'ProductScreen',
    iosIcon: 'ios-log-out',
    mdIcon: 'md-log-out',
  },
]

class Drawer extends Component {
  nav = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }

  renderItem = data => (
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
              dataArray={dataMenu}
              renderRow={data => this.renderItem(data)}
            />
          </ScrollView>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
})

export default connect(mapStateToProps)(Drawer)
