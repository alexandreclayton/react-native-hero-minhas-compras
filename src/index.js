import React from 'react'
import { Provider } from 'react-redux'
import 'config/reactotron'
import 'config/firebase'
import Routes from 'navigation'
import store from 'store'

const App = () => <Provider store={store}><Routes /></Provider>

export default App
