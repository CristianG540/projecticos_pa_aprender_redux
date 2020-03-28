import { SET_TECHNOLOGY } from '../constants/action-types'

export const setTechnology = (text) => ({
  type: SET_TECHNOLOGY,
  payload: { text }
})
