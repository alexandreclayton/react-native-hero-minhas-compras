import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    marginTop: metrics.baseMargin,
  },
  drawerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    paddingTop: metrics.baseMargin * 2,
  },
  drawerImage: {
    marginTop: metrics.baseMargin * 2,
  },
  drawerName: {
    color: colors.white,
    fontSize: 12,
    marginTop: metrics.baseMargin * 2,
    marginBottom: metrics.baseMargin,
  },
  drawerImageDefault: {
    height: 80,
    width: 80,
    textAlign: 'center',
    color: colors.white,
    fontSize: 80,
    backgroundColor: colors.lightPrimary,
  },
  drawerItem: {
    height: 16,
    width: 16,
    color: colors.secundaryText,
  },
  list: {
    flex: 1,
  },
})

export default styles
