import { combineReducers } from 'redux'
import cardInfo from './cardInfo'
import lastId from './lastId'
import view from './view'

const rootReducer = combineReducers({
  cardInfo,
  lastId,
  view
})

export default rootReducer
