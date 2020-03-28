import React from 'react'
import { render } from 'react-dom'

// Redux
import store from './redux/store'

// Components
import App from './components/App/App'

import './styles/main.scss'

const reduxRender = () => render(<App />, document.getElementById('root'))

reduxRender()
store.subscribe(reduxRender)
