import React from 'react'
import { Provider } from 'react-redux'

import store from './store/store'
// import Container from './components/Container'
// import ContainerHooks from './components/ContainerHooks'
import Users from './components/Users'


const App = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
}

export default App