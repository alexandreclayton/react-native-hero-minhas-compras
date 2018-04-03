import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
  },

  content: {
    flexGrow: 1,
  },

  logoContent: {
    flex: 2,
    justifyContent: 'center',
  },

  formContent: {
    flex: 1,
    justifyContent: 'center',
  },

  footerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  logoIcon: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 70,
  },

  logoTitle: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 14,
    color: colors.lightPrimary,
  },

  error: {
    color: colors.danger,
    textAlign: 'center',
    marginTop: metrics.baseMargin,
  },

  input: {
    color: colors.white,
  },

  inputIcon: {
    color: colors.white,
  },

  buttonEntrar: {
    marginTop: metrics.baseMargin * 2,
    backgroundColor: colors.accentColor,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default styles
