import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//单独引入汇总的reducer
import reducers from './reducer'

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
)
