import { createStore } from 'redux'

// Redux
import rootReducer from '../../redux/reducers/rootReducer'

const initialState = {
  screen: {
    wasChanged: false,
    content: '0'
  }
}
const store = createStore(
  rootReducer,
  initialState
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
