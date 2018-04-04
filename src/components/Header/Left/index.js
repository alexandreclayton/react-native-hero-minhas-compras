import React, { Component } from 'react'
import { Button, Icon } from 'native-base'
import PropTypes from 'prop-types'
import styles from './styles'

export default class HeaderLeft extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
  }
  render() {
    const { navigation } = this.props
    return (
      <Button
        transparent
        onPress={() => navigation.navigate('DrawerOpen')}
        style={styles.left}
      >
        <Icon
          style={styles.iconLeft}
          ios="ios-menu"
          android="md-menu"
          size={16}
        />
      </Button>
    )
  }
}
