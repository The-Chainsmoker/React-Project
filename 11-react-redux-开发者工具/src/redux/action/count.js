import { INCREMENT_COUNT, DECERMENT_COUNT } from '../constant'
import store from '../store'
export const incrementAction = (data) => ({ type: INCREMENT_COUNT, data })
export const decrementAction = (data) => ({ type: DECERMENT_COUNT, data })
export const addAsyncAction = (data, time = 500) => {
  return () => {
    //直接调用在异步中使用dispatch
    setTimeout(() => {
      store.dispatch(incrementAction(data))
    }, time)
  }
}
