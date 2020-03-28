import { clone } from 'ramda'

const rootReducer = (prevState) => {
  const nextState = clone(prevState)

  return nextState
}

export default rootReducer
