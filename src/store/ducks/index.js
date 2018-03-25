import { combineReducers } from 'redux'
import nav from 'navigation/reducer'
import login from './login'

export default combineReducers({
  nav,
  login,
})
