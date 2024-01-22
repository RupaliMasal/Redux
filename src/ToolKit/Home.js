import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from './Store'
import { DecNum, IncNum } from './CountSlice1';

const Home = () => {
    const count=useSelector((store)=>store.counter.count);
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <p>Count:{count}</p>
      <button onClick={()=>dispatch(IncNum())}>Increase</button>
      <button onClick={()=>dispatch(DecNum())}>Decrease</button>
    </div>
  )
}

export default Home
