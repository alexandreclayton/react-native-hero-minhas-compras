import React from 'react'
import { Button, Icon, Left } from 'native-base'
import PropTypes from 'prop-types'
import styles from './styles'

const HeaderLeft = ({ navigation }) => (
  <Left>
    <Button transparent onPress={() => navigation.navigate('DrawerOpen')} >
      <Icon name="menu" style={styles.icon} />
    </Button>
  </Left>
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default HeaderLeft
