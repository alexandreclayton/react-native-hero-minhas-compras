// State Login
const initialState = {
  username: '',
  password: '',
  error: '',
}

// Actions Types
export const Types = {
  CHANGE_USERNAME: 'login/CHANGE_USERNAME',
  CHANGE_PASSWORD: 'login/CHANGE_PASSWORD',
  LOGIN_ERROR: 'login/LOGIN_ERROR',
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
    default:
      return state
  }
}

// Actions Creators
export const Actions = {
  onChangeUsername: username => ({
    type: Types.CHANGE_USERNAME,
    payload: username,
  }),
  onChangePassword: password => ({
    type: Types.CHANGE_PASSWORD,
    payload: password,
  }),
  onChangeLoginError: error => ({
    type: Types.LOGIN_ERROR,
    payload: error,
  }),
}
