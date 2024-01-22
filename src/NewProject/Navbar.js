import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Link to='/Product'>Product</Link>
        <Link to='/Home'>Home</Link>
        <Link to='/Cart'>Card</Link>
       
      </div>
    )
  }
}
