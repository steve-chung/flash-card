import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO } from '../actionTypes'
var dotProp = require('dot-prop-immutable')

const initialState = {
  cardInfo: []
}

const cardInfo = (state = initialState, action) => {
  console.log(state.cardInfo)
  switch (action.type) {
    case SET_CARDINFO:
      return dotProp.set(state, 'cardInfo', list => [...list, {id: action.id, question: action.question, answer: action.answer}])
    case DEL_CARDINFO:
      let index = state.cardInfo.findIndex((card) => card.id === action.index)
      return dotProp.delete(state, `cardInfo.${index}`)
    case UPDATE_CARDINFO:
      index = state.cardInfo.findIndex((card) => card.id === action.index)
      return dotProp.set(state, `cardInfo${index}`, obj => [...obj, {question: action.question, answer: action.answer}])
    default:
      return state
  }
}

export default cardInfo
