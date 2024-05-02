import React from 'react'
import { Comp4 } from './Comp4'

export const Comp3 = ({ user }) => {
  return (
    <div>
        <h1> {user} </h1>
        <Comp4 newUser = {user}/>
    </div>
  )
}
