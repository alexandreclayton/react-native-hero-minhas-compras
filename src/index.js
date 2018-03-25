import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'config/reactotron'
import 'config/firebase'
import createNavigator from 'navigation'
import store from 'store'
import { isLogged } from 'services/firebase'

export default class App extends Component {
  state = {
    userChecked: false,
    userLogged: false,
  }

  componentDidMount() {
    this.appLoaded()
  }

  appLoaded = () => {
    this.setState({
      userChecked: true,
      userLogged: isLogged(),
    })
  }

  render() {
    if (!this.state.userChecked) return null
    const Routes = createNavigator(this.state.userLogged)
    return <Provider store={store}><Routes /></Provider>
  }
}
