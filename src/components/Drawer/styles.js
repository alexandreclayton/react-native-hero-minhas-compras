import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  content: {
    flex: 1,
    marginTop: metrics.baseMargin,
  },
  drawerHeader: {
    height: 200,
    backgroundColor: colors.primaryColor,
  },
  drawerImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 120,
    width: 120,
    borderRadius: 75,
    backgroundColor: colors.lightPrimary,
  },
  drawerImageDefault: {
    height: 80,
    width: 80,
    textAlign: 'center',
    color: colors.white,
    fontSize: 80,
    backgroundColor: colors.lightPrimary,
  },
  drawerName: {
    color: colors.white,
    marginTop: metrics.baseMargin,
  },
  drawerItem: {
    height: 16,
    width: 16,
    color: colors.secundaryText,
  },
})

export default styles
