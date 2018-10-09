import rootReducer from './reducers'
import {
  createStore
} from 'redux'

export const store =
  createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // enable thunk to the rootReducer to add function to the reducers
  )
