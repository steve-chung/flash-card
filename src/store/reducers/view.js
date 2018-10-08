import {SET_VIEW} from '../actionTypes'
import hash from '../../hash'
const link = window.location.hash
const DEFAULT_STATE = {
  path: hash.parse(link).path,
  params: hash.parse(link).params
}

const view = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_VIEW:
      return {
        path: hash.parse(link).path,
        params: hash.parse(link).params
      }
    default:
      return state
  }
}

export default view
