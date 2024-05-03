import React, { useState } from 'react'
import { Comp3 } from './Comp3'

// let props = {
//     user : "Data"
// }

// let {user} = props

export const Comp2 = ({user, recieveData}) => {
 
  return (
    <div>
        <Comp3 user = {user}/>
    </div>
  )
}
