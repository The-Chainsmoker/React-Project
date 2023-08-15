import React from 'react'
import ReactDOM from 'react-dom'
export default function Hook() {
  const [count, setCounts] = React.useState(0)
  React.useEffect(() => {
    console.log('count更新')
    return () => {}
  }, [count])
  //null ==> 监听所有事件
  //[] ==> componentDidMount

  const myRef = React.useRef()

  const change = () => {
    setCounts((count) => count + 1)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <div>{count}</div>
      <button onClick={change}>点击</button>
    </div>
  )
}
