import { INCREMENT_PERSON } from '../constant'
import store from '../store'
export const addAction = (data, time) => {
  return () => {
    setTimeout(() => {
      store.dispatch({ type: INCREMENT_PERSON, data })
    }, time)
  }
}
