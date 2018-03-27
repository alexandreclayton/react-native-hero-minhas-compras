import firebase from 'firebase'
import { NavigationActions } from 'react-navigation'
// State Login
const initialState = {
  username: 'alexandreclayton@gmail.com',
  password: '123456',
  error: '',
  authenticating: false,
  logged: false,
}

// Actions Types
export const Types = {
  CHANGE_USERNAME: 'login/CHANGE_USERNAME',
  CHANGE_PASSWORD: 'login/CHANGE_PASSWORD',
  LOGIN_ERROR: 'login/LOGIN_ERROR',
  AUTHENTICATING: 'login/AUTHENTICATING',
  LOGGED: 'login/LOGGED',
}

// Reducers
export default function favorites(state = initialState, action) {
  switch (action.type) {
    case Types.CHANGE_USERNAME:
      return { ...state, username: action.payload }
    case Types.CHANGE_PASSWORD:
      return { ...state, password: action.payload }
    case Types.LOGIN_ERROR:
      return { ...state, error: action.payload }
    case Types.AUTHENTICATING:
      return { ...state, authenticating: action.payload }
    case Types.LOGGED:
      return { ...state, logged: action.payload }
    default:
      return state
  }
}

// Actions Creators
export const Actions = {
  onLoginUsernameChange: username => ({
    type: Types.CHANGE_USERNAME,
    payload: username,
  }),
  onLoginPasswordChange: password => ({
    type: Types.CHANGE_PASSWORD,
    payload: password,
  }),
  onLoginErrorValid: error => ({
    type: Types.LOGIN_ERROR,
    payload: error,
  }),
  onLoginAuth: (username, password) => (dispatch) => {
    dispatch({ type: Types.AUTHENTICATING, payload: true })
    firebase.auth().signInWithEmailAndPassword(username, password)
      .then(success => Actions.onLoginSuccess(dispatch))
      .catch(error => Actions.onLoginError(error, dispatch))
  },
  onLoginSuccess: (dispatch) => {
    dispatch(NavigationActions.navigate({ routeName: 'MainStack' }))
    dispatch({ type: Types.LOGGED, payload: true })
    dispatch({ type: Types.AUTHENTICATING, payload: false })
    dispatch({ type: Types.LOGIN_ERROR, payload: '' })
  },
  onLoginError: (error, dispatch) => {
    dispatch({ type: Types.LOGGED, payload: true })
    dispatch({ type: Types.AUTHENTICATING, payload: false })
    dispatch({ type: Types.LOGIN_ERROR, payload: error.message })
  },
}
