import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createNavigator from 'navigation'
import store from 'store'

export default class App extends Component {
  render() {
    const Routes = createNavigator(false)
    return <Provider store={store}><Routes /></Provider>
  }
}
