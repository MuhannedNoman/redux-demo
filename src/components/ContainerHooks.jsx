import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { DECREMENT, INCREMENT } from '../store/counterReducer'

const ContainerHooks = () => {

    const counter = useSelector((state) => state.counter.counter)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch({type:INCREMENT})}>+</button>
        <button onClick={() => dispatch({type:DECREMENT})}>-</button>
    </div>
  )
}

export default ContainerHooks