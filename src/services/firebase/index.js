import firebase from 'firebase'

const isLogged = () => firebase.auth().onAuthStateChanged(user => user)
const getUserLogged = () => firebase.auth().currentUser

export { isLogged, getUserLogged }
