import React from 'react'
import {
  Container,
  Content,
  Text,
  Header,
  Left,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

const Main = ({ navigation }) => (
  <Container style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Header>
      <Left>
        <Icon
          name="navicon"
          size={16}
          onPress={() => navigation.navigate('DrawerOpen')}
        />
      </Left>
    </Header>
    <Content padder contentContainerStyle={styles.content}>
      <View><Text>LISTA</Text></View>
    </Content>
  </Container>
)

Main.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Main // connect(mapStateToProps)(Main)
