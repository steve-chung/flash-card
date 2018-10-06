import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO } from '../actionTypes'

export function addCard() {
  return {
    type: SET_CARDINFO
  }
}

export function updateCard(index) {
  return {
    type: UPDATE_CARDINFO,
    index
  }
}

export function deleteCard(index) {
  return {
    type: DEL_CARDINFO,
    index
  }
}
