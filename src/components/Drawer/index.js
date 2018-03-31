import React from 'react'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'

const Drawer = ({ navigation }) => (
  <View style={styles.container}>
    <ScrollView>
      <View>
        <Text style={styles.sectionHeadingStyle}>
          Section 1
        </Text>
        <View style={styles.navSectionStyle}>
          <TouchableOpacity onPress={() => navigation.popToTop()}>
            <Text style={styles.navItemStyle}>
              Home
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text style={styles.sectionHeadingStyle}>
          Section 2
        </Text>
        <View style={styles.navSectionStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
            <Text style={styles.navItemStyle} >
              Product
            </Text>
          </TouchableOpacity>
          <Text style={styles.navItemStyle}>
            Page3
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
)

Drawer.propTypes = {
  navigation: PropTypes.shape().isRequired,
}

export default Drawer
