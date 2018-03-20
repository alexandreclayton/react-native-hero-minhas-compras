import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    padding: metrics.basePadding,
  },

  logoIcon: {
    textAlign: 'center',
    color: colors.textColor,
    fontSize: 70,
  },

  title: {
    textAlign: 'center',
    color: colors.textColor,
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

  logo: {
    flex: 1,
    justifyContent: 'center',
  },

  form: {
    flex: 1,
    marginTop: metrics.baseMargin * 2,
  },

  input: {
    color: colors.textColor,
  },

  inputIcon: {
    color: colors.textColor,
  },

  buttonEntrar: {
    marginTop: metrics.baseMargin * 2,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  buttonRecuperarText: {
    fontWeight: 'bold',
    fontSize: 16,
  },

})

export default styles
