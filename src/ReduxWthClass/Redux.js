import { connect } from 'formik'
import React, { Component } from 'react'

 class Redux extends Component {
  render() {
    return (
      <div>

        <p>count:{this.props.count}</p>
        <button onClick={this.props.toIncrease}>increase</button>
        <button onClick={this.props.todecrease}>decrease</button>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
    return(
        {count:state.count}
    )
}
const mapDispatachToProps=(dispatach)=>(

    {toIncrease:()=>dispatach({type:"INCREASE"}),
     todecrease:()=>dispatach({type:"DECREASE"})}
)
    

export default connect(mapStateToProps,mapDispatachToProps)(Redux);