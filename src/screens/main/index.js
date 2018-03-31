import React from 'react'
import {
  Container,
  Content,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import { NavigationActions, withNavigation } from 'react-navigation'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import styles from './styles'

const Main = ({ navigation }) => (
  <Container style={styles.container}>
    <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
    <Content padder contentContainerStyle={styles.content}>
      <View><Text>LISTA</Text></View>
    </Content>
  </Container>
)

Main.navigationOptions = {
  title: 'Minhas Compras',
  headerMode: 'float',
}

Main.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Main // connect(mapStateToProps)(Main)
