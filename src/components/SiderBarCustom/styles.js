import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  drawerHeader: {
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    paddingTop: metrics.basePadding * 2,
    paddingBottom: metrics.basePadding,
    color: colors.white,
  },
  drawerTextUserName: {
    color: colors.white,
    paddingTop: metrics.basePadding,
  },
  drawerItem: {
    color: colors.secundaryText,
  },
})

export default styles
