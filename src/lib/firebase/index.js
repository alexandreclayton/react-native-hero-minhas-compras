import { AsyncStorage } from 'react-native'
import firebase from 'firebase'

const isLogged = async () => {
  let userData = ''
  try {
    userData = JSON.parse(await AsyncStorage.getItem('@MinhasCompras:user'))
    if (userData === null) {
      firebase.auth().onAuthStateChanged(async (user) => {
        await AsyncStorage.setItem('@MinhasCompras:user', JSON.stringify(user))
        userData = user
      })
    } else {
      return userData
    }
  } catch (error) {
    // Error saving data
  }
  return null
}
const getUserLogged = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem('@MinhasCompras:user'))
  } catch (error) {
    // Error saving data
  }
  return null
}

export { isLogged, getUserLogged }
