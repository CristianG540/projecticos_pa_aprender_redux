import React from 'react'
import PropTypes from 'prop-types'
// Redux
import store from '../../redux/store'
import { setTechnology } from '../../redux/actions'

const dispatchBtnAction = (e) => {
  const tech = e.target.dataset.tech
  store.dispatch(setTechnology(tech))
}

const ButtonGroup = ({ technologies }) => (
  <div className='button-group'>
    {technologies.map((tech, i) => (
      <button
        data-tech={tech}
        key={`btn-${i}`}
        className='dark-button'
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
)

ButtonGroup.propTypes = {
  technologies: PropTypes.array.isRequired
}

export default ButtonGroup
