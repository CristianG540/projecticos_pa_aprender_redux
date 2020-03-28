// Redux
import { SET_TECHNOLOGY } from '../constants/action-types'

const rootReducer = (prevState, action) => {
  console.log('rootReducer -> action', action)
  let nextState

  switch (action.type) {
    case SET_TECHNOLOGY:
      nextState = {
        ...prevState,
        tech: action.payload.text
      }
      return nextState
    default:
      return prevState
  }
}

export default rootReducer
