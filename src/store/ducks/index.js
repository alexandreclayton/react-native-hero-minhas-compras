import { combineReducers } from 'redux'
import nav from 'navigation/reducer'
import login from './login'
import categoria from './categoria'

export default combineReducers({
  nav,
  login,
  categoria,
})
