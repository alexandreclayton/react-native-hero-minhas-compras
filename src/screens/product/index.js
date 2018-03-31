import React from 'react'
import {
  Container,
  Content,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { Header } from 'components'
import { colors } from 'styles'
import styles from './styles'

const Product = ({ navigation }) => (
  <Container style={styles.container}>
    <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
    <Content padder contentContainerStyle={styles.content}>
      <View><Text>PRODUTOS</Text></View>
    </Content>
  </Container>
)

Product.navigationOptions = {
  title: 'Produtos',
  headerMode: 'float',
}

Product.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Product
