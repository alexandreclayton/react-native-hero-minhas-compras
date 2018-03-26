import React from 'react'
import {
  Header,
  Left,
  Body,
  Title,
  Right,
  Button,
  Subtitle,
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import { colors } from 'styles'
import styles from './styles'

const HeaderApp = ({
  left,
  title,
  subtitle,
  right,
  navigation,
}) => (
  <Header style={styles.header} iosBarStyle="light-content">
    <Left>
      {!left ?
        <Button
          transparent
          onPress={() => navigation.navigate('DrawerOpen')}
        >
          <Icon
            style={styles.iconLeft}
            name="navicon"
            size={16}
          />
        </Button>
        : left}
    </Left>
    <Body style={styles.containerTitle}>
      <Title style={styles.title}>{title}</Title>
      {subtitle ? <Subtitle>Subtitle</Subtitle> : null }
    </Body>
    {!right ? <Right />
      : right}
  </Header>
)

HeaderApp.propTypes = {
  navigation: PropTypes.shape().isRequired,
  left: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  right: PropTypes.shape().isRequired,
}

export default HeaderApp
