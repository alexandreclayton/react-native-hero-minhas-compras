import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'

const middleware = [ReduxThunk]
const reducers = combineReducers()

const createAppropriateStore = (__DEV__ ? console.tron.createStore : createStore)
const store = createAppropriateStore(reducers, applyMiddleware(...middleware))

export default store
