import React, { Component } from 'react'

// Redux
import store from '../../redux/store'

// Components
import CalculatorButton from '../CalculatorButton/CalculatorButton'

class App extends Component {
  render () {
    return (
      <div className='calculator'>
        <input type='text' className='calculator-screen' value={store.getState().screen.content} disabled />

        <div className='calculator-keys'>
          <CalculatorButton id='plus-btn' text='+' cssClass='operator' />
          <CalculatorButton id='minus-btn' text='-' cssClass='operator' />
          <CalculatorButton id='multiply-btn' text='*' cssClass='operator' />
          <CalculatorButton id='divide-btn' text='/' cssClass='operator' />

          <CalculatorButton id='seven-btn' text='7' />
          <CalculatorButton id='eight-btn' text='8' />
          <CalculatorButton id='nine-btn' text='9' />

          <CalculatorButton id='four-btn' text='4' />
          <CalculatorButton id='five-btn' text='5' />
          <CalculatorButton id='six-btn' text='6' />

          <CalculatorButton id='one-btn' text='1' />
          <CalculatorButton id='two-btn' text='2' />
          <CalculatorButton id='three-btn' text='3' />

          <CalculatorButton id='zero-btn' text='0' />
          <CalculatorButton id='decimal-btn' text='.' cssClass='decimal' />
          <CalculatorButton id='all-clear-btn' text='AC' value='all-clear' cssClass='all-clear' />
          <CalculatorButton id='equal-btn' text='=' cssClass='equal-sign' />
        </div>

        {/* <HelloWorld tech={store.getState().tech} />
        <ButtonGroup technologies={['React', 'Elm', 'React-redux']} /> */}
      </div>
    )
  }
}

export default App
