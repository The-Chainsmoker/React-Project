import React, { Component } from 'react'
import { useNavigate, useResolvedPath } from 'react-router-dom'

export default function Head() {
  console.log(
    'useResolvedPath',
    useResolvedPath('http://localhost:3000/home?name=eirc#good')
  )
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goForward = () => {
    navigate(1)
  }

  const goMessage = () => {
    navigate('/home/message/detail', {
      state: { id: '2' },
      replace: true,
    })
  }

  return (
    <div>
      <button onClick={goBack}>goBack</button>
      <button onClick={goForward}>goForward</button>
      <button onClick={goMessage}>goMessage</button>
    </div>
  )
}
