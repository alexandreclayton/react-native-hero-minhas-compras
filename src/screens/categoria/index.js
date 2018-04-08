import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  Container,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Text,
  Right,
} from 'native-base'
import { StatusBar, ListView } from 'react-native'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import { Actions as CategoriaActions } from 'store/ducks/categoria'
import styles from './styles'

class CategoriaScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Cetegorias',
    headerRight: (
      <Right>
        <Button transparent onPress={() => null} >
          <Icon name="add" style={styles.btnAdd} />
        </Button>
      </Right>
    ),
  })

  static propTypes = {
    categoria: PropTypes.shape().isRequired,
    onListCategoria: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.onListCategoria()
  }

  itemList = data => (
    <ListItem key={data.key}>
      <Text> {data.title} </Text>
    </ListItem>
  )
  btnLeft = data => (
    <Button full onPress={() => alert(JSON.stringify(data))}>
      <Icon active name="create" />
    </Button>
  )
  btnRight = data => (
    <Button full danger onPress={() => alert(JSON.stringify(data))}>
      <Icon active name="trash" />
    </Button>
  )

  render() {
    const { categoria } = this.props
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return (
      <Container style={styles.container} >
        <StatusBar barStyle="light-content" translucent backgroundColor={colors.primaryColor} />
        <Content padder contentContainerStyle={styles.content}>
          <List
            dataSource={ds.cloneWithRows(categoria.data)}
            renderRow={data => this.itemList(data)}
            renderLeftHiddenRow={data => this.btnLeft(data)}
            renderRightHiddenRow={data => this.btnRight(data)}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  categoria: state.categoria,
})

const mapDispatchToProps = dispatch => bindActionCreators(CategoriaActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CategoriaScreen)
