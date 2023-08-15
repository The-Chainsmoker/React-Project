import { INCREMENT_COUNT, DECERMENT_COUNT } from '../constant'
const baseValue = 0
export default function count(preState = baseValue, action) {
  const { type, data } = action
  switch (type) {
    case INCREMENT_COUNT:
      return preState + data
    case DECERMENT_COUNT:
      return preState - data
    default:
      return preState
  }
}
