import { ADD_VALUE_TO_CALC_SCREEN } from '../constants/action-types'

export const addValueToCalcScreen = (value) => ({
  type: ADD_VALUE_TO_CALC_SCREEN,
  payload: { value }
})
