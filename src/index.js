import React from 'react'
import { Provider } from 'react-redux'
import 'config/reactotron'
import 'config/firebase'
import AppWithNavigationState from 'navigation'
import store from 'store'

const App = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

export default App
