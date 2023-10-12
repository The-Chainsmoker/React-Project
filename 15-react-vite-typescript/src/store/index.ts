import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import countReducer from './reducer/count/reducer'
import personReducer from './reducer/person/reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

/*
  1. window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  2. composeWithDevTools(applyMiddleware(thunk))

  以上两种方法可以开启浏览器 redux测试工具
 */

/*
  export default legacy_createStore(
  countReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
*/

let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose //rt

// 把仓库数据，浏览器redux-dev-tools，还有reduxThunk插件关联在store中
export default legacy_createStore(
  combineReducers({ countReducer, personReducer }),
  composeEnhancers(applyMiddleware(thunk))
) //rt
