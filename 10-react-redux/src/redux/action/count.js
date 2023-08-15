import { INCREMENT, DECREMENT } from '../constant'
import store from '../../redux/store'

export const createIncrementAction = (data) => ({ type: INCREMENT, data })
export const createDecrementAction = (data) => ({ type: DECREMENT, data })

export const createAsyncIncrementAction = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch(createIncrementAction(data))
    }, time)
  }
}
