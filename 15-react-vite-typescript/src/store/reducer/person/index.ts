const store = {
  state: {
    name: '小明',
  },
  action: {
    SETNAME(newState: { name: string }, data: string) {
      newState.name = data
    },
  },
  actionNames: {},
  asyncActions: {},
}

Object.keys(store.action).forEach((item) => {
  store.actionNames[item] = item
})

export default store
