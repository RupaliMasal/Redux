import React, { Component } from 'react'

export default class Product extends Component {
    constructor(){
        super();
        this.state={
            arr:[]
        }
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products?sort=asc")
        .then(response=>response.json())
        .then(res=>
            this.setState({arr:res}))
    }
  render() {
    return (
      <div >
        <h1>DashBord</h1>
        <div style={{display:"flex"}}>  {this.state.arr.map(({id,title,image,price})=>(
            <div style={{border:"2px solid black",width:"400px"}}>
                <header>{id} {title}</header>
                <section>
                    <img src={image} height={"200px"} />
                </section>
                <p>{price}</p>
                <footer><button>Add To Cart</button></footer>
            </div>
                
))}</div>
     
      </div>
    )
  }
}
