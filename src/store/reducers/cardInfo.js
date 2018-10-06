
import { SET_CARDINFO } from '../actionTypes'

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
      return {

      }

  }
}
