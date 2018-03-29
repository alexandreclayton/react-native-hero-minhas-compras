import firebase from 'firebase'

const isLogged = () => {
  let logged = false
  firebase.auth().onAuthStateChanged((user) => {
    logged = user
  })
  return logged
}
const getUserLogged = () => firebase.auth().currentUser

export { isLogged, getUserLogged }
