import React, { Component } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Home'
import Product from './Product'
import Navbar from './Navbar'
import Cart from './Cart'
export default class RouterPage extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/'element={<Home/>}/>
            <Route path='/Home'element={<Home/>}/>
            <Route path='/Product'element={<Product/>}/>
           
            <Route path='/Cart'element={<Cart/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
