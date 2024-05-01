import React, { Component } from 'react'

export default class ChildClassProps extends Component {

   
    static defaultProps = {
        arr : "Default Class Arr"
    }

  render() {
    let {arr, children} = this.props
    return (
      <div>
         <h1> Class Component </h1>
         <h6> {this.props.arr} </h6>
         <h1> {arr} </h1>
         <section> 
            {children}
        </section>
      </div>
    )
  }
}
