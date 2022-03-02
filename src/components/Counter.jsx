import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '../features/counter'

const ContainerHooks = () => {

    const counter = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default ContainerHooks