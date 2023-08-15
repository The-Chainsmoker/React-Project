import { ADD_PERSON } from '../constant'

const initPre = [{ id: 0, name: '小明', age: 18 }]

// reducer 加工的返回数据,由 getState() 调用
export default function (preState = initPre, action) {
  const { type, data } = action
  switch (type) {
    case ADD_PERSON:
      //不能写成 preState.push(data) 、preState.unshift(data)
      //因为浅层引用值不会改变,只能返回深层引用
      return [data, ...preState]
    default:
      return preState
  }
}
