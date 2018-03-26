import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Actions as DrawerActions } from 'store/ducks/drawer'
import styles from './styles'

class HeaderLeft extends Component {
  static propTypes = {
    onToggleDrawer: PropTypes.func.isRequired,
  }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onToggleDrawer} >
        <Icon name="navicon" size={16} style={styles.icon} />
      </TouchableOpacity >
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(DrawerActions, dispatch)

export default connect(null, mapDispatchToProps)(HeaderLeft)
