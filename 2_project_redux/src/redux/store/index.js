import { createStore } from 'redux'

// Redux
import rootReducer from '../../redux/reducers/rootReducer'

const initialState = { tech: 'Reacto+' }
const store = createStore(rootReducer, initialState)

export default store
