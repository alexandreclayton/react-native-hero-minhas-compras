import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './ducks'

const middleware = [ReduxThunk]

const createAppropriateStore = (__DEV__ ? console.tron.createStore : createStore)
const store = createAppropriateStore(reducers, applyMiddleware(...middleware))

export default store
