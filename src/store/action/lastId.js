import {SET_LASTID} from '../actionTypes'

export function setLastId(lastId) {
  return {
    type: SET_LASTID,
    lastId
  }
}
