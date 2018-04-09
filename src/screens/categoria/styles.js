import { StyleSheet } from 'react-native'
import { colors } from 'styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },

  content: {
    flexGrow: 1,
  },

  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnAdd: {
    color: colors.white,
  },

})

export default styles
