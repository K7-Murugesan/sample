import React from 'react'

// let Props = {
//   data : "abc",
//   arr : [1,2,3]
// }

// let {data,arr } = Props

export const ChildProps = ({data, arr, children}) => {  // ( props )
  console.log( data, arr);
  return (
    <div>
       <h1> Child Props - {children} </h1>
       <h6> {data} </h6>
       <h6> {arr} </h6>
    </div>
  )
}

ChildProps.defaultProps = {
  data : "Default Data",
  arr : "Default Array"
}
