import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container,
  Content,
  Text,
} from 'native-base'
import { View, StatusBar } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import { Actions as CategoriaActions } from 'store/ducks/categoria'
import styles from './styles'

class CategoriaScreen extends Component {
  static navigationOptions = {
    title: 'Cetegorias',
  }

  static propTypes = {
    categoria: PropTypes.shape().isRequired,
    onListCategoria: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.onListCategoria()
  }

  render() {
    const { categoria } = this.props
    return (
      <Container style={styles.container} >
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
        <Content padder contentContainerStyle={styles.content}>
          {categoria.data.map(c => <View><Text>{c.title}</Text></View>)}
        </Content>
      </Container>
    )
  }
}

/*
CategoriaScreen
*/
const mapStateToProps = state => ({
  categoria: state.categoria,
})

const mapDispatchToProps = dispatch => bindActionCreators(CategoriaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaScreen)
