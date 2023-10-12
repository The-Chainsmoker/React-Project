import { Component, useState, createRef, useRef } from 'react'

interface iocState {
  name: string
  [selfName: string]: any
}

interface iocProps {
  age: string
}

export default function index() {
  return (
    <div>
      <Children1 age="28" />
    </div>
  )
}

function Children1(props: iocProps) {
  const [name, setName] = useState<string>('输入框内容')
  const myref = useRef<HTMLInputElement>(null)
  return (
    <div>
      <div>age:{props.age} </div>
      <div>name: {name}</div>
      <input type="text" ref={myref} />
      <button
        onClick={() => {
          setName((myref.current as HTMLInputElement).value)
        }}
      >
        改变
      </button>
    </div>
  )
}

/* const Children1: React.FC<iocProps> = (props) => {
  return (
    <div>
      <div>age: {props.age}</div>
    </div>
  )
}
 */
