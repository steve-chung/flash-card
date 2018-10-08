import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO } from '../actionTypes'

export function addCard(nextId, question, answer) {
  console.log(nextId.lastId)
  return {
    type: SET_CARDINFO,
    id: nextId.lastId++,
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
