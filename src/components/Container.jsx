import React from 'react'
import { connect } from 'react-redux'

import { DECREMENT, INCREMENT } from '../store/counterReducer'

const Container = ({counter, Increment, Decrement, ...rest}) => {
    console.log(rest)
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={() => Increment()}>+</button>
        <button onClick={() => Decrement()}>-</button>
    </div>
  )
}

const mapStateToStore = (state, props) => {
    return {
        counter: state.counter,
        ...props
    }
}

const mapDisbatchToStore = (dispatch) => {
    return {
        Increment: () => dispatch({type: INCREMENT}),
        Decrement: () => dispatch({type: DECREMENT})
    }
}

export default connect(mapStateToStore, mapDisbatchToStore)(Container) 