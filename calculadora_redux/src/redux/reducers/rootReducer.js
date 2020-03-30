// Redux
import { ADD_VALUE_TO_CALC_SCREEN } from '../constants/action-types'

const rootReducer = (prevState, action) => {
  console.log('rootReducer -> action', action)
  let nextState
  const { payload } = action

  switch (action.type) {
    case ADD_VALUE_TO_CALC_SCREEN: {
      const { content, wasChanged } = prevState.screen

      nextState = {
        ...prevState,
        screen: {
          wasChanged: true,
          content: (!wasChanged) ? payload.value : content + payload.value
        }
      }
      return nextState
    }

    default:
      return prevState
  }
}

export default rootReducer
