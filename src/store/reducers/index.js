import { combineReducers } from 'redux'
import cardInfo from './cardInfo'
import lastId from './lastId'

const rootReducer = combineReducers({
  cardInfo,
  lastId
})

export default rootReducer
