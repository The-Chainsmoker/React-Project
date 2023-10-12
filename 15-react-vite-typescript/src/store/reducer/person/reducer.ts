import handleCount from './index'
const baseState = { ...handleCount.state }
const personReducer = (preState = baseState, action: any) => {
  const { type, data } = action

  //创建新的对象地址
  const newState = JSON.parse(JSON.stringify(preState))

  /* switch (type) {
    case 'ADD':
      return { num: preState.num + data }
    case 'REDUCE':
      return { num: preState.num - data }
    default:
      return preState
  } */

  for (const key in handleCount.actionNames) {
    if (key === type) {
      handleCount.action[key](newState, data)
      break
    }
  }

  return newState
}

export default personReducer
