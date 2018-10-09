import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO, EDIT_CARDINFO } from '../actionTypes'

var dotProp = require('dot-prop-immutable')

const initialState = {
  cardInfo: JSON.parse(localStorage.getItem('cardInfo')) || []
}

function findCardIndex(cards, index) {
  return cards.findIndex(card => card.id === index)
}
const cardInfo = (state = initialState, action) => {
  const index = findCardIndex(state.cardInfo, action.index)
  switch (action.type) {
    case SET_CARDINFO:
      return dotProp.set(state, 'cardInfo', list => [...list, {id: action.id, question: action.question, answer: action.answer, clicked: false}])
    case DEL_CARDINFO:
      return dotProp.delete(state, `cardInfo.${index}`)
    case UPDATE_CARDINFO:
      const state1 = dotProp.set(state, `cardInfo.${index}.question`, action.question)
      const state2 = dotProp.set(state1, `cardInfo.${index}.answer`, action.answer)
      const state3 = dotProp.set(state2, `cardInfo.${index}.clicked`, false)
      return state3
    case EDIT_CARDINFO:
      return dotProp.set(state, `cardInfo.${index}.clicked`, action.clicked)
    default:
      return state
  }
}

export default cardInfo
