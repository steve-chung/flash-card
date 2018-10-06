import {SET_VIEW} from '../actionTypes'

export function setView(path, params) {
  return {
    type: SET_VIEW,
    path,
    params
  }
}
