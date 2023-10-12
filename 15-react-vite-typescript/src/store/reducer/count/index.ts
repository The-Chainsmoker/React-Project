const store = {
  state: {
    num: 0,
  },
  action: {
    ADD(newState: { num: number }, data: number) {
      newState.num += data
    },
    REDUCE(newState: { num: number }, data: number) {
      newState.num -= data
    },
  },
  actionNames: {
    // ADD: 'ADD',
    // REDUCE: 'REDUCE',
  },
  //优化redux-thunk的异步写法,闭包封装传入时间参数
  asyncActions: {
    asyncAdd(time: number) {
      return (dispatch: Function) => {
        setTimeout(() => {
          dispatch({ type: 'ADD', data: 1 })
        }, time)
      }
    },
  },
}

Object.keys(store.action).forEach((item) => {
  store.actionNames[item] = item
})

console.log('store:', store)

export default store
