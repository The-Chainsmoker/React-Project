import React from 'react'
import countIndex from '@/store/reducer/count'
import { useSelector, useDispatch } from 'react-redux'

export default function index() {
  const { num, name } = useSelector((state: RootState) => ({
    num: state.countReducer.num,
    name: state.personReducer.name,
  }))

  const dispatch = useDispatch()

  const add = () => {
    dispatch({ type: 'ADD', data: 1 })
  }

  const reduce = () => {
    dispatch({ type: 'REDUCE', data: 1 })
  }

  const asyncAdd = () => {
    dispatch(countIndex.asyncActions.asyncAdd(1000))
  }

  return (
    <div>
      <div>
        {name} --- {num}
      </div>
      <button onClick={add}>+</button>
      <button onClick={asyncAdd}>异步+</button>
      <button onClick={reduce}>-</button>
    </div>
  )
}
