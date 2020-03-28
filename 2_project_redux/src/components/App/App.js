import React, { Component } from 'react'

// Redux
import store from '../../redux/store'

// Components
import HelloWorld from '../HelloWorld/HelloWorld'
import ButtonGroup from '../ButtonGroup/ButtonGroup'

class App extends Component {
  render () {
    return (
      <>
        <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={['React', 'Elm', 'React-redux']} />
      </>
    )
  }
}

export default App
