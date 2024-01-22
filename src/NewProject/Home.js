import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
        
      <h1>My Shop</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error iure quidem nobis in reiciendis ad libero consequatur asperiores neque, exercitationem voluptas at optio officiis ratione nisi quos vel dolorem? Et?</p>
     <p> <Link to='/Product'>Product</Link></p>
      <p><Link to='/Cart'>Cart</Link></p>
    </div>
  )
}

export default Home
