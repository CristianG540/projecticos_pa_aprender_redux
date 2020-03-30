import {
  ADD_VALUE_TO_CALC_SCREEN,
  CLEAR_SCREEN_VALUE,
  EVALUATE_SCREEN_VALUE
} from '../constants/action-types'

export const addValueToCalcScreen = value => ({
  type: ADD_VALUE_TO_CALC_SCREEN,
  payload: { value }
})

export const clearScreenValue = () => ({
  type: CLEAR_SCREEN_VALUE
})

export const evaluateScreenValue = () => ({
  type: EVALUATE_SCREEN_VALUE
})
