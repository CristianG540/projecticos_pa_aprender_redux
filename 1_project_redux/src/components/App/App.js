import React, { Component } from 'react'
import HelloWorld from '../HelloWorld/HelloWorld'

class App extends Component {
  caca = 'hehehe'

  render () {
    return <HelloWorld tech={this.caca} />
  }
}

export default App
