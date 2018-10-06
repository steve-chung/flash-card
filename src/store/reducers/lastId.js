import {SET_LASTID} from '../actionTypes'

const DEFAULT_STATE = {
  lastId: 0
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LASTID:
      return {
        lastId: action.lastId
      }
  }
}
