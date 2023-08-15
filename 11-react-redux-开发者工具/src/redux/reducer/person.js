import { INCREMENT_PERSON } from '../constant'

const baseValue = [{ id: 0, name: '小明', age: '14' }]
export default function person(preState = baseValue, action) {
  const { type, data } = action

  switch (type) {
    case INCREMENT_PERSON:
      return [data, ...preState]
    default:
      return preState
  }
}
