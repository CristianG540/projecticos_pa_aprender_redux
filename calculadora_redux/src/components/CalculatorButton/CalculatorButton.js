import React from 'react'
import PropTypes from 'prop-types'
// Redux
import store from '../../redux/store'
import { addValueToCalcScreen, clearScreenValue, evaluateScreenValue } from '../../redux/actions'
// Constants
import { ALL_CLEAR } from './constants'

const dispatchBtnAction = (e) => {
  const { value } = e.target

  if (value === ALL_CLEAR) {
    store.dispatch(clearScreenValue())
  } else if (value === '=') {
    store.dispatch(evaluateScreenValue())
  } else {
    store.dispatch(addValueToCalcScreen(value))
  }
}

const CalculatorButton = ({ id, text, value, cssClass = '' }) => {
  const actualValue = (value) || text

  return (
    <button
      id={id}
      key={`btn-${id}`}
      className={cssClass}
      onClick={dispatchBtnAction}
      value={actualValue}
    >
      {text}
    </button>
  )
}

CalculatorButton.defaultProps = {
  cssClass: '[]'
}

CalculatorButton.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string,
  cssClass: PropTypes.string
}

export default CalculatorButton
