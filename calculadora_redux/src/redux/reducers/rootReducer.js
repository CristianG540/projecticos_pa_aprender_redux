import { evaluate } from 'mathjs'
// Redux
import {
  ADD_VALUE_TO_CALC_SCREEN,
  CLEAR_SCREEN_VALUE,
  EVALUATE_SCREEN_VALUE
} from '../constants/action-types'
// Constants
import { MALFORMED_EXPRESSION, INFINITY } from '../constants/errors'

const rootReducer = (prevState, action) => {
  const { payload } = action
  const { content } = prevState.screen
  let { wasChanged } = prevState.screen
  let nextState

  switch (action.type) {
    case ADD_VALUE_TO_CALC_SCREEN: {
      nextState = {
        ...prevState,
        screen: {
          wasChanged: true,
          content: (!wasChanged) ? payload.value : content + payload.value
        }
      }

      return nextState
    }

    case CLEAR_SCREEN_VALUE: {
      nextState = {
        ...prevState,
        screen: {
          wasChanged: false,
          content: '0'
        }
      }

      return nextState
    }

    case EVALUATE_SCREEN_VALUE: {
      let newScreenValue = ''

      try {
        newScreenValue = evaluate(content).toString()
        wasChanged = true

        if (newScreenValue === INFINITY) {
          newScreenValue = INFINITY
          wasChanged = false
        }
      } catch (_) {
        newScreenValue = MALFORMED_EXPRESSION
        wasChanged = false
      }
      nextState = {
        ...prevState,
        screen: {
          wasChanged,
          content: newScreenValue
        }
      }

      return nextState
    }

    default:
      return prevState
  }
}

export default rootReducer
