import { combineReducers } from 'redux'
import nav from 'navigation/reducer'
import login from './login'
import drawer from './drawer'

export default combineReducers({
  nav,
  login,
  drawer,
})
