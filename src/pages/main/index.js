import React, { Component } from 'react'
import {
  Container,
  Content,
  Drawer,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import SideBar from 'components/sidebar'
import styles from './styles'

class Main extends Component {
  static navigationOptions = {
    title: 'Minhas Compras',
    headerBackTitle: null,
  };
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  closeDrawer = () => {

  }

  render() {
    closeDrawer = () => {
      this._drawer._root.close()
    }
    openDrawer = () => {
      this._drawer._root.open()
    }
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        content={<SideBar navigator={this.props.navigation} />}
        onClose={() => this.closeDrawer()}
      >
        <Container style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Content padder contentContainerStyle={styles.content}>
            <View><Text>LISTA</Text></View>
          </Content>
        </Container>
      </Drawer>
    )
  }
}

export default Main
