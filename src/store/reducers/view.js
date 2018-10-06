import {SET_VIEW} from '../actionTypes'
import hash from '../../hash'
const link = window.location.hash
const DEFAULT_STATE = {
  path: hash.parse(link).path,
  params: hash.parse(link).params
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_VIEW:
      return {
        path: action.path,
        params: action.params
      }
  }
}
