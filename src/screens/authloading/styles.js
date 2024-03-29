import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  text: {
    color: colors.white,
    marginTop: metrics.baseMargin,
    textAlign: 'center',
  },
})

export default styles
