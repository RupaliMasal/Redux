import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecNum, IncNum } from './CountSlice';

const Home = () => {
    const Count=useSelector((store)=>store.counter.count);
    const dispatch=useDispatch()
  return (
    <div>
      <h1>Home</h1>
      <p>Count:{Count}</p>
      <button onClick={()=>dispatch(IncNum())}>Increase</button>
      <button onClick={()=>dispatch(DecNum())}>Decrease</button>
    </div>
  )
}

export default Home
