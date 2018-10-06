import {SET_VIEW} from '../actionTypes'

export function setView(path, params) {
  return {
    tyep: SET_VIEW,
    path,
    params
  }
}
