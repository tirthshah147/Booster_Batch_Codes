import React,{useState,useReducer} from 'react'

const ACTIONS = {
  INCREMENT:'increment',
  DECREMENT:'decrement'
}

function reducer(state,action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return {count : state.count + 1}
      break;
    case ACTIONS.DECREMENT:
      return {count : state.count - 1}
      break;
    default:
      return state;
      break;
  }
}

export default function UseReducerEx1() {
  const [state, dispatch] = useReducer(reducer, {count:0})
  // const [count,setCount] = useState(0);

  function increment() {
    // setCount(prevCount => prevCount + 1);
    dispatch({type: ACTIONS.INCREMENT})
  }

  function decrement() {
    // setCount(prevCount => prevCount - 1);
    dispatch({type: ACTIONS.DECREMENT})
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}
