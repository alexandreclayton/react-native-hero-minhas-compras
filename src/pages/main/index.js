import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container,
  Content,
  Drawer,
  Header,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Title,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { SideBar, HeaderLeft } from 'components'
import styles from './styles'

class Main extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    drawerOpen: PropTypes.bool.isRequired,
  }
  static navigationOptions = {
    title: 'Minhas Compras',
    headerBackTitle: null,
    headerLeft: <HeaderLeft />,
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        content={<SideBar navigator={this.props.navigation} />}
        side="left"
        type="overlay"
        open={this.props.drawerOpen}
        tapToClose
        openDrawerOffset={0.4} // 40% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
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

const mapStateToProps = state => ({
  drawerOpen: state.drawer.open,
})

// const mapDispatchToProps  = dispatch => bindActionCreators(DrawerActions, dispatch)

export default connect(mapStateToProps)(Main)
