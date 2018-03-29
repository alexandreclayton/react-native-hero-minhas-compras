import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView, NavigationActions } from 'react-navigation'
import styles from './styles'

const Drawer = props => (
  <View style={styles.container}>
    <ScrollView>
      <View>
        <Text style={styles.sectionHeadingStyle}>
          Section 1
        </Text>
        <View style={styles.navSectionStyle}>
          <Text style={styles.navItemStyle}>
            Page1
          </Text>
        </View>
      </View>
      <View>
        <Text style={styles.sectionHeadingStyle}>
          Section 2
        </Text>
        <View style={styles.navSectionStyle}>
          <Text style={styles.navItemStyle}>
            Page2
          </Text>
          <Text style={styles.navItemStyle}>
            Page3
          </Text>
        </View>
      </View>
    </ScrollView>
  </View>
)

export default Drawer
