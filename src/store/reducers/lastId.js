import {SET_LASTID} from '../actionTypes'

const DEFAULT_STATE = {
  lastId: JSON.parse(localStorage.getItem('lastId')) || 0
}

const lastId = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LASTID:
      return {
        lastId: action.lastId.lastId + 1
      }
    default:
      return state
  }
}

export default lastId
