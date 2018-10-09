import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO, EDIT_CARDINFO } from '../actionTypes'

export function addCard(nextId, question, answer) {
  return {
    type: SET_CARDINFO,
    id: nextId.lastId + 1,
    question,
    answer
  }
}

export function updateCard(index, question, answer) {
  return {
    type: UPDATE_CARDINFO,
    index,
    question,
    answer
  }
}

export function deleteCard(index) {
  return {
    type: DEL_CARDINFO,
    index
  }
}

export function cardEditClicked(index, clicked) {
  return {
    type: EDIT_CARDINFO,
    index,
    clicked
  }
}
