import React from 'react'
import { decreaseValue, increaseValue } from '../ReduxStore/ButtounSlice'
import { useDispatch, useSelector } from 'react-redux'
import store1 from '../ReduxStore/Store1';

function Comp1() {
  const inputValue= useSelector((store1)=>store1.button.value)
  const dispatch=useDispatch();
  const inValue=()=>{
    dispatch(increaseValue())
  }
  const deValue=()=>{
    dispatch(decreaseValue())
  }
  return (
    <div>
      <h1>This Is Redux Toolkit Compound</h1>
      <button onClick={inValue}>+</button>
      <input type="text" value={inputValue}/> 
      <button onClick={deValue}>-</button>
    </div>
  )
}

export default Comp1
