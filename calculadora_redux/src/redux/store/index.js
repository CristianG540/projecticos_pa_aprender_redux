import { createStore } from 'redux'

// Redux
import rootReducer from '../../redux/reducers/rootReducer'

const initialState = {
  screen: {
    wasChanged: false,
    content: '0'
  }
}
const store = createStore(rootReducer, initialState)

export default store
