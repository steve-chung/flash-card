import { SET_CARDINFO, DEL_CARDINFO, UPDATE_CARDINFO } from '../actionTypes'
var dotProp = require('dot-prop-immutable')

const DEFAULT_STATE = {
  cardInfo: [{
    id: 0,
    question: '',
    answer: ''
  }]
}

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CARDINFO:
      return dotProp.set(state, 'cardInfo', list => [...list, {id: action.id, question: action.question, answer: action.answer}])
    case DEL_CARDINFO:
      return dotProp.delete(state, 'cardInfo[action.index]')
    case UPDATE_CARDINFO:
      return dotProp.set(state, 'cardInfo[action.index]', obj => [...obj, {question: action.question, answer: action.answer}])
  }
}
